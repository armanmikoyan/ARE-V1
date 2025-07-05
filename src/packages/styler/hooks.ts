import { useEffect, useState } from 'react';
import { parseKey, breakpointRanges, generateRangeMediaQuery } from '@/packages/styler';

/**
 * React hook to detect if current screen matches the specified breakpoint key. Works with `styler`
 *
 * Supported keys:
 * - Exact breakpoint: "sm", "md", etc.
 * - Less than breakpoint: "<sm"
 * - Greater than breakpoint: "lg>"
 * - Range between breakpoints: "sm:md"
 *
 * @param key Responsive key string
 * @returns true if matches current screen size, else false
 */
export function useBreakpoint(key: string): boolean {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const { operator, key: startKey, rangeEnd } = parseKey(key);
		const startRange = breakpointRanges[startKey as keyof typeof breakpointRanges];
		if (!startRange) return;

		const maxRange = rangeEnd
			? (breakpointRanges[rangeEnd as keyof typeof breakpointRanges]?.[1] ??
				breakpointRanges[rangeEnd as keyof typeof breakpointRanges]?.[0])
			: undefined;

		const mediaQuery = generateRangeMediaQuery(startRange, operator, maxRange);
		if (!mediaQuery) return;

		const cleanQuery = mediaQuery.replace(/^@media\s*/, '');
		const mediaQueryList = window.matchMedia(cleanQuery);

		const handleChange = () => setMatches(mediaQueryList.matches);
		handleChange();
		mediaQueryList.addEventListener('change', handleChange);

		return () => {
			mediaQueryList.removeEventListener('change', handleChange);
		};
	}, [key]);

	return matches;
}
