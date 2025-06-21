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
 * Generate a CSS media query string from a breakpoint range,
 * with support for operators:
 *
 * Operators:
 * - `<`: max-width strictly below the breakpoint's lower bound (lowerBound - 0.01rem)
 * - `>`: min-width strictly above the breakpoint's upper bound (upperBound + 0.01rem)
 * - `null`: min-width + max-width range (or just min-width if no upper bound)
 *
 * @param range - Tuple of min and optional max rem values.
 * @param operator - Optional operator: `<`, `>`, or null.
 * @param maxRange - Optional max rem override for range queries.
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
		const base = max !== undefined ? max : min;
		if (base !== undefined) {
			const minWidth = (base + 0.01).toFixed(2) + 'rem';
			return `@media (min-width: ${minWidth})`;
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
	if (key === '_') return { operator: null, key: '_' };
	if (key.startsWith('<')) return { operator: '<', key: key.slice(1) };
	if (key.endsWith('>')) return { operator: '>', key: key.slice(0, -1) };
	if (key.includes(':')) {
		const [start, end] = key.split(':');
		return { operator: null, key: start, rangeEnd: end };
	}
	return { operator: null, key };
}

/**
 * Helper to check if a value is a function
 */
function isFunction(value: unknown): value is (props: any) => any {
	return typeof value === 'function';
}

/**
 * Recursively resolve a value:
 * - If function, call with props.
 * - If object, recursively resolve each key.
 * - Else return value as is.
 */
function resolveValue(value: any, props: any): any {
	if (isFunction(value)) return value(props);
	if (value && typeof value === 'object' && !Array.isArray(value)) {
		const result: any = {};
		for (const k in value) {
			result[k] = resolveValue(value[k], props);
		}
		return result;
	}
	return value;
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
 * Priority order when styles overlap:
 * 1. Operator keys (e.g. "<sm", "lg>") — lowest priority, override base style within their ranges.
 * 2. Range keys (e.g. "sm:md") — medium priority.
 * 3. Exact breakpoint keys (e.g. "sm") — highest priority, override all within media query.
 * 4. Base key `_` — lowest priority, applies globally unless overridden.
 *
 * @param styles - Object mapping CSS properties to responsive values.
 * @returns Function that takes props and returns flattened style object with media queries.
 */
export default function sx(styles: Record<string, any>) {
	return function (props: any) {
		const baseStyles: Record<string, any> = {};

		// Buckets for media queries by priority to ensure correct override order
		const mediaBuckets: Record<number, Record<string, Record<string, any>>> = {
			1: {}, // operator keys: <sm, lg>, etc. (lowest priority)
			2: {}, // range keys: sm:md (medium priority)
			3: {}, // exact keys: sm, md, lg (highest priority)
		};

		for (const prop in styles) {
			let val = styles[prop];

			// Resolve functions anywhere in val (including nested)
			val = resolveValue(val, props);

			if (val && typeof val === 'object' && '_' in val) {
				// Base style
				baseStyles[prop] = val._;

				// Separate keys by type
				const allKeys = Object.keys(val).filter((k) => k !== '_');
				const operatorKeys = allKeys.filter((k) => k.startsWith('<') || k.endsWith('>'));
				const rangeKeys = allKeys.filter((k) => k.includes(':'));
				const exactKeys = allKeys.filter(
					(k) => !k.startsWith('<') && !k.endsWith('>') && !k.includes(':'),
				);

				// 1. Operator keys (lowest priority)
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

				// 2. Range keys (medium priority)
				for (const key of rangeKeys) {
					const { key: startKey, rangeEnd } = parseKey(key);
					if (!rangeEnd) continue;
					const startRange = breakpointRanges[startKey as keyof typeof breakpointRanges];
					const endRange = breakpointRanges[rangeEnd as keyof typeof breakpointRanges];
					if (!startRange || !endRange) continue;

					const maxRange = endRange[1] !== undefined ? endRange[1] : endRange[0];
					const mediaQuery = generateRangeMediaQuery(startRange, null, maxRange);

					if (mediaQuery) {
						if (!mediaBuckets[2][mediaQuery]) mediaBuckets[2][mediaQuery] = {};
						mediaBuckets[2][mediaQuery][prop] = val[key];
					}
				}

				// 3. Exact keys (highest priority)
				for (const key of exactKeys) {
					const range = breakpointRanges[key as keyof typeof breakpointRanges];
					if (!range) continue;

					const mediaQuery = generateRangeMediaQuery(range);
					if (mediaQuery) {
						if (!mediaBuckets[3][mediaQuery]) mediaBuckets[3][mediaQuery] = {};
						mediaBuckets[3][mediaQuery][prop] = val[key];
					}
				}
			} else if (val && typeof val === 'object' && !Array.isArray(val)) {
				// Nested selector or nested style object - RECURSIVELY process it
				const nestedResult = sx(val)(props);

				// Separate base styles and media queries from nestedResult
				for (const key in nestedResult) {
					if (key.startsWith('@media')) {
						// Media query: attach nested selector under this media query
						if (!mediaBuckets[3][key]) mediaBuckets[3][key] = {};
						if (!mediaBuckets[3][key][prop]) mediaBuckets[3][key][prop] = {};
						Object.assign(mediaBuckets[3][key][prop], nestedResult[key]);
					} else {
						// Base nested style under the nested selector key
						if (!baseStyles[prop]) baseStyles[prop] = {};
						baseStyles[prop][key] = nestedResult[key];
					}
				}
			} else {
				// Not an object with base key: assign as base style directly
				baseStyles[prop] = val;
			}
		}

		// Merge media queries by priority so higher priority override lower
		const mergedMediaStyles: Record<string, Record<string, any>> = {};

		for (const priority of [1, 2, 3]) {
			for (const mediaQuery in mediaBuckets[priority]) {
				if (!mergedMediaStyles[mediaQuery]) mergedMediaStyles[mediaQuery] = {};
				Object.assign(mergedMediaStyles[mediaQuery], mediaBuckets[priority][mediaQuery]);
			}
		}

		return {
			...baseStyles,
			...mergedMediaStyles,
		};
	};
}
