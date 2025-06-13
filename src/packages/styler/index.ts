// Responsive breakpoint ranges in rem units
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
 * - Exact breakpoint: "xs(small range)"
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
 * The base key `_` is mandatory; you can pass `""` or `null` if no base style is needed..
 * Priority order when styles overlap:
 * 1. Exact breakpoint keys (e.g. "sm") — highest priority, override others within their media query.
 * 2. Range keys (e.g. "sm:md") — override operator keys but are overridden by exact keys.
 * 3. Operator keys (e.g. "<sm", "lg>") — override the base style within their ranges.
 * 4. Base key `_` — lowest priority, applies globally unless overridden.
 * @param styles - Object mapping CSS properties to responsive values.
 * @returns Flattened style object with media queries.
 */
export default function styler(styles: Record<string, ResponsiveValue<unknown>>) {
	const baseStyles: Record<string, any> = {};

	// Use three buckets for media queries, to ensure correct override priority
	// Lower number = lower priority = applied earlier
	const mediaBuckets: Record<number, Record<string, Record<string, any>>> = {
		1: {}, // operator keys: <sm, lg>, etc. (lowest priority)
		2: {}, // range keys: sm:md (medium priority)
		3: {}, // exact keys: sm, md, lg (highest priority)
	};

	for (const prop in styles) {
		const val = styles[prop];

		if (val && typeof val === 'object' && '_' in val) {
			// 1. Base styles first (lowest priority)
			baseStyles[prop] = val._;

			const allKeys = Object.keys(val).filter((k) => k !== '_');

			// Separate keys by type
			const operatorKeys = allKeys.filter((k) => k.startsWith('<') || k.endsWith('>'));
			const rangeKeys = allKeys.filter((k) => k.includes(':'));
			const exactKeys = allKeys.filter(
				(k) => !k.startsWith('<') && !k.endsWith('>') && !k.includes(':'),
			);

			// 2. Add operator keys media queries (priority 1)
			for (const key of operatorKeys) {
				const { operator, key: startKey } = parseKey(key);
				if (startKey === '_') continue;
				const startRange = breakpointRanges[startKey as keyof typeof breakpointRanges];
				if (!startRange) continue;

				const mediaQuery = generateRangeMediaQuery(startRange, operator);
				if (mediaQuery) {
					if (!mediaBuckets[1][mediaQuery]) mediaBuckets[1][mediaQuery] = {};
					mediaBuckets[1][mediaQuery][prop] = val[key];
				}
			}

			// 3. Add range keys media queries (priority 2)
			for (const key of rangeKeys) {
				const { key: startKey, rangeEnd } = parseKey(key);
				if (!rangeEnd) continue;
				const startRange = breakpointRanges[startKey as keyof typeof breakpointRanges];
				const endRange = breakpointRanges[rangeEnd as keyof typeof breakpointRanges];
				if (!startRange || !endRange) continue;

				// Max range is the max value of the end breakpoint
				const maxRange = endRange[1] !== undefined ? endRange[1] : endRange[0];
				const mediaQuery = generateRangeMediaQuery(startRange, null, maxRange);

				if (mediaQuery) {
					if (!mediaBuckets[2][mediaQuery]) mediaBuckets[2][mediaQuery] = {};
					mediaBuckets[2][mediaQuery][prop] = val[key];
				}
			}

			// 4. Add exact keys media queries (priority 3)
			for (const key of exactKeys) {
				const range = breakpointRanges[key as keyof typeof breakpointRanges];
				if (!range) continue;

				const mediaQuery = generateRangeMediaQuery(range);
				if (mediaQuery) {
					if (!mediaBuckets[3][mediaQuery]) mediaBuckets[3][mediaQuery] = {};
					mediaBuckets[3][mediaQuery][prop] = val[key];
				}
			}
		} else {
			// No base or object with `_`: apply as base style directly
			baseStyles[prop] = val;
		}
	}

	// Merge all media queries by priority, so higher priority styles override lower ones
	const mergedMediaStyles: Record<string, Record<string, any>> = {};

	for (const priority of [1, 2, 3]) {
		for (const mediaQuery in mediaBuckets[priority]) {
			if (!mergedMediaStyles[mediaQuery]) mergedMediaStyles[mediaQuery] = {};
			Object.assign(mergedMediaStyles[mediaQuery], mediaBuckets[priority][mediaQuery]);
		}
	}

	// Final output: base styles + media queries
	return {
		...baseStyles,
		...mergedMediaStyles,
	};
}
