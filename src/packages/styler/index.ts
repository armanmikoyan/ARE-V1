export const breakpointRanges = {
	xxs: [20, 30], // 20rem - 30rem (320px - 480px)
	xs: [30, 40.625], // 30rem - 40.625rem (480px - 650px)
	sm: [40.625, 48], // 40.625rem - 48rem (650px - 768px)
	smd: [61.25, 61.25], // 61.25rem (980px min-width only)
	md: [48, 64], // 48rem - 64rem (768px - 1024px)
	lg: [64, 73.75], // 64rem - 73.75rem (1024px - 1180px)
	xlg: [73.75, 75], // 73.75rem - 75rem (1180px - 1200px)
	xxlg: [75, 90], // 75rem - 90rem (1200px - 1440px)
	xxxlg: [90, 100], // 90rem - 100rem (1440px - 1600px)
	xxxxlg: [100], // 100rem+ (1600px+, min-width only)
} as const;

/**
 * Responsive style values type.
 *
 * Can be:
 * - A single value (applies globally).
 * - An object with:
 *    - `_`: mandatory base (default) value,
 *    - breakpoint keys for responsive overrides.
 */
export type ResponsiveValue<T> = T | { _: T; [key: string]: T };

/**
 * Generate a CSS media query string from a breakpoint range.
 *
 * @param range - Tuple of min and optional max rem values.
 * @param operator - Optional operator:
 *   - `null` (default): min-max range query,
 *   - `'<':` max-width just below min breakpoint,
 *   - `'>':` min-width from min breakpoint.
 * @param maxRange - Optional max rem override.
 * @returns CSS media query string.
 */
export function generateRangeMediaQuery(
	range: readonly number[],
	operator?: '<' | '>' | null,
	maxRange?: number,
): string {
	const [min, max] = range;
	const minRem = `${min}rem`;
	const maxRem = max !== undefined ? `${max}rem` : null;

	if (operator === '<') {
		if (min !== undefined) {
			const maxWidth = (min - 0.01).toFixed(2) + 'rem';
			return `@media (max-width: ${maxWidth})`;
		}
	} else if (operator === '>') {
		if (min !== undefined) {
			return `@media (min-width: ${minRem})`;
		}
	} else {
		if (maxRange !== undefined) {
			return `@media (min-width: ${minRem}) and (max-width: ${maxRange}rem)`;
		}
		if (maxRem && max !== min) {
			return `@media (min-width: ${minRem}) and (max-width: ${maxRem})`;
		} else {
			return `@media (min-width: ${minRem})`;
		}
	}

	return '';
}

/**
 * Parse a responsive key string into operator and breakpoint info.
 *
 * Supported formats:
 * - Base key: "_"
 * - Less than breakpoint: "<sm"
 * - Greater than breakpoint: "lg>"
 * - Range between breakpoints: "sm:md"
 * - Exact breakpoint: "xs"
 *
 * @param key - Responsive key string.
 * @returns Object with `operator`, `key`, and optional `rangeEnd`.
 */
export function parseKey(key: string): {
	operator: '<' | '>' | null;
	key: string;
	rangeEnd?: string;
} {
	if (key === '_') {
		return { operator: null, key: '_' };
	}
	if (key.startsWith('<')) {
		return { operator: '<', key: key.slice(1) };
	}
	if (key.endsWith('>')) {
		return { operator: '>', key: key.slice(0, -1) };
	}
	if (key.includes(':')) {
		const [start, end] = key.split(':');
		return { operator: null, key: start, rangeEnd: end };
	}
	return { operator: null, key };
}

/**
 * Converts responsive style values into a flat style object with media queries.
 *
 * Style values can have keys:
 * - `_`: mandatory base style (applied globally).
 * - Exact breakpoints (e.g. "sm").
 * - Less than breakpoints (e.g. "<sm").
 * - Greater than breakpoints (e.g. "lg>").
 * - Ranges between breakpoints (e.g. "sm:md").
 *
 * The base key `_` is mandatory; you can pass `""` or `null` if no base style is needed.
 * Exact breakpoint keys take precedence over operator/range keys for the same media query.
 *
 * @param styles - Object mapping CSS properties to responsive values.
 * @returns Flattened style object with media queries.
 */
export default function styler(styles: Record<string, ResponsiveValue<unknown>>) {
	const baseStyles: Record<string, any> = {};
	const mediaStyles: Record<string, Record<string, any>> = {};

	for (const prop in styles) {
		const val = styles[prop];

		if (val && typeof val === 'object' && '_' in val) {
			// Set base style
			baseStyles[prop] = val._;

			// Separate keys into exact and operator/range
			const plainKeys = Object.keys(val).filter(
				(k) => k !== '_' && !k.startsWith('<') && !k.endsWith('>') && !k.includes(':'),
			);
			const operatorKeys = Object.keys(val).filter(
				(k) => k !== '_' && (k.startsWith('<') || k.endsWith('>') || k.includes(':')),
			);

			// Apply exact breakpoint styles
			for (const key of plainKeys) {
				const range = breakpointRanges[key as keyof typeof breakpointRanges];
				if (range) {
					const mediaQuery = generateRangeMediaQuery(range);
					if (!mediaStyles[mediaQuery]) mediaStyles[mediaQuery] = {};
					mediaStyles[mediaQuery][prop] = val[key];
				}
			}

			// Apply operator/range styles if not already set by exact keys
			for (const key of operatorKeys) {
				const { operator, key: startKey, rangeEnd } = parseKey(key);
				if (startKey === '_') continue; // skip base key here

				const startRange = breakpointRanges[startKey as keyof typeof breakpointRanges];
				if (!startRange) continue;

				let mediaQuery = '';

				if (rangeEnd) {
					const endRange = breakpointRanges[rangeEnd as keyof typeof breakpointRanges];
					if (!endRange) continue;

					const maxRange = endRange[1] !== undefined ? endRange[1] : endRange[0];
					mediaQuery = generateRangeMediaQuery(startRange, null, maxRange);
				} else {
					mediaQuery = generateRangeMediaQuery(startRange, operator);
				}

				if (mediaQuery) {
					if (mediaStyles[mediaQuery]?.hasOwnProperty(prop)) continue;

					if (!mediaStyles[mediaQuery]) mediaStyles[mediaQuery] = {};
					mediaStyles[mediaQuery][prop] = val[key];
				}
			}
		} else {
			// Simple non-responsive value
			baseStyles[prop] = val;
		}
	}

	return {
		...baseStyles,
		...mediaStyles,
	};
}
