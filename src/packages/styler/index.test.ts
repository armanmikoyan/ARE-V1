import styler, { generateRangeMediaQuery, parseKey } from './index';

describe('styler', () => {
	it('returns base styles when no responsive values', () => {
		expect(
			styler({
				color: 'red',
				margin: '10px',
			}),
		).toEqual({
			color: 'red',
			margin: '10px',
		});
	});

	it('handles responsive values with base _ only', () => {
		expect(
			styler({
				color: { _: 'blue' },
				padding: { _: '5px' },
			}),
		).toEqual({
			color: 'blue',
			padding: '5px',
		});
	});

	it('handles exact breakpoint keys', () => {
		expect(
			styler({
				color: { _: 'black', sm: 'red', md: 'green' },
			}),
		).toEqual({
			color: 'black',
			'@media (min-width: 40.625rem) and (max-width: 48rem)': {
				color: 'red',
			},
			'@media (min-width: 48rem) and (max-width: 64rem)': {
				color: 'green',
			},
		});
	});

	it('handles operator keys like <sm and lg>', () => {
		expect(
			styler({
				fontSize: { _: '12px', '<sm': '10px', 'lg>': '18px' },
			}),
		).toEqual({
			fontSize: '12px',
			'@media (max-width: 40.62rem)': {
				fontSize: '10px',
			},
			'@media (min-width: 64rem)': {
				fontSize: '18px',
			},
		});
	});

	it('handles range keys like sm:md', () => {
		expect(
			styler({
				margin: { _: '0', 'sm:md': '10px' },
			}),
		).toEqual({
			margin: '0',
			'@media (min-width: 40.625rem) and (max-width: 64rem)': {
				margin: '10px',
			},
		});
	});

	it('does not overwrite exact keys with operator keys', () => {
		expect(
			styler({
				color: { _: 'black', sm: 'red', '<sm': 'blue' },
			}),
		).toEqual({
			color: 'black',
			'@media (min-width: 40.625rem) and (max-width: 48rem)': {
				color: 'red',
			},
			'@media (max-width: 40.62rem)': {
				color: 'blue',
			},
		});
	});
});

describe('generateRangeMediaQuery', () => {
	it('generates min-max media query', () => {
		expect(generateRangeMediaQuery([40, 50])).toBe(
			'@media (min-width: 40rem) and (max-width: 50rem)',
		);
	});
	it('generates min only when max equals min', () => {
		expect(generateRangeMediaQuery([61.25, 61.25])).toBe('@media (min-width: 61.25rem)');
	});
	it('generates min only if max is undefined', () => {
		expect(generateRangeMediaQuery([100])).toBe('@media (min-width: 100rem)');
	});
	it('generates max-width query with < operator', () => {
		expect(generateRangeMediaQuery([40, 50], '<')).toBe('@media (max-width: 39.99rem)');
	});
	it('generates min-width query with > operator', () => {
		expect(generateRangeMediaQuery([64], '>')).toBe('@media (min-width: 64rem)');
	});
	it('generates media query with maxRange override', () => {
		expect(generateRangeMediaQuery([40, 50], null, 55)).toBe(
			'@media (min-width: 40rem) and (max-width: 55rem)',
		);
	});
});

describe('parseKey', () => {
	it('parses base key _', () => {
		expect(parseKey('_')).toEqual({ operator: null, key: '_' });
	});
	it('parses < operator', () => {
		expect(parseKey('<sm')).toEqual({ operator: '<', key: 'sm' });
	});
	it('parses > operator', () => {
		expect(parseKey('lg>')).toEqual({ operator: '>', key: 'lg' });
	});
	it('parses range key', () => {
		expect(parseKey('sm:md')).toEqual({ operator: null, key: 'sm', rangeEnd: 'md' });
	});
	it('parses exact key', () => {
		expect(parseKey('xs')).toEqual({ operator: null, key: 'xs' });
	});
});
