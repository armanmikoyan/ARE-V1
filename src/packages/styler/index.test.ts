import styler, { generateRangeMediaQuery, parseKey } from './index';

describe('styler - operator < and > applied to all breakpoints with adjusted bounds', () => {
	it('applies <xxs and xxs> operators', () => {
		expect(styler({ padding: { _: '1rem', '<xxs': '0.25rem', 'xxs>': '1.5rem' } })).toEqual({
			padding: '1rem',
			'@media (max-width: 19.99rem)': { padding: '0.25rem' },
			'@media (min-width: 30.01rem)': { padding: '1.5rem' },
		});
	});

	it('applies <xs and xs> operators', () => {
		expect(styler({ padding: { _: '1rem', '<xs': '0.25rem', 'xs>': '1.5rem' } })).toEqual({
			padding: '1rem',
			'@media (max-width: 29.99rem)': { padding: '0.25rem' },
			'@media (min-width: 40.63rem)': { padding: '1.5rem' },
		});
	});

	it('applies <sm and sm> operators', () => {
		expect(styler({ padding: { _: '1rem', '<sm': '0.25rem', 'sm>': '1.5rem' } })).toEqual({
			padding: '1rem',
			'@media (max-width: 40.62rem)': { padding: '0.25rem' },
			'@media (min-width: 48.01rem)': { padding: '1.5rem' },
		});
	});

	it('applies <smd and smd> operators (single value range)', () => {
		expect(styler({ padding: { _: '1rem', '<smd': '0.25rem', 'smd>': '1.5rem' } })).toEqual({
			padding: '1rem',
			'@media (max-width: 61.24rem)': { padding: '0.25rem' },
			'@media (min-width: 61.26rem)': { padding: '1.5rem' },
		});
	});

	it('applies <md and md> operators', () => {
		expect(styler({ padding: { _: '1rem', '<md': '0.25rem', 'md>': '1.5rem' } })).toEqual({
			padding: '1rem',
			'@media (max-width: 47.99rem)': { padding: '0.25rem' },
			'@media (min-width: 64.01rem)': { padding: '1.5rem' },
		});
	});

	it('applies <lg and lg> operators', () => {
		expect(styler({ padding: { _: '1rem', '<lg': '0.25rem', 'lg>': '1.5rem' } })).toEqual({
			padding: '1rem',
			'@media (max-width: 63.99rem)': { padding: '0.25rem' },
			'@media (min-width: 73.76rem)': { padding: '1.5rem' },
		});
	});

	it('applies <xlg and xlg> operators', () => {
		expect(styler({ padding: { _: '1rem', '<xlg': '0.25rem', 'xlg>': '1.5rem' } })).toEqual({
			padding: '1rem',
			'@media (max-width: 73.74rem)': { padding: '0.25rem' },
			'@media (min-width: 75.01rem)': { padding: '1.5rem' },
		});
	});

	it('applies <xxlg and xxlg> operators', () => {
		expect(styler({ padding: { _: '1rem', '<xxlg': '0.25rem', 'xxlg>': '1.5rem' } })).toEqual({
			padding: '1rem',
			'@media (max-width: 74.99rem)': { padding: '0.25rem' },
			'@media (min-width: 90.01rem)': { padding: '1.5rem' },
		});
	});

	it('applies <xxxlg and xxxlg> operators', () => {
		expect(styler({ padding: { _: '1rem', '<xxxlg': '0.25rem', 'xxxlg>': '1.5rem' } })).toEqual({
			padding: '1rem',
			'@media (max-width: 89.99rem)': { padding: '0.25rem' },
			'@media (min-width: 100.01rem)': { padding: '1.5rem' },
		});
	});

	it('applies <xxxxlg and xxxxlg> with correct bounds', () => {
		expect(styler({ fontSize: { _: '1rem', '<xxxxlg': '0.75rem', 'xxxxlg>': '2rem' } })).toEqual({
			fontSize: '1rem',
			'@media (max-width: 99.99rem)': { fontSize: '0.75rem' },
			'@media (min-width: 100.01rem)': { fontSize: '2rem' },
		});
	});
});

describe('styler - non-responsive styles', () => {
	it('returns plain styles unchanged when no breakpoint keys are used', () => {
		expect(
			styler({
				color: 'black',
				margin: '0.625rem',
				padding: '0.313rem',
			}),
		).toEqual({
			color: 'black',
			margin: '0.625rem',
			padding: '0.313rem',
		});
	});

	it('returns styles correctly if some are responsive and some are plain', () => {
		expect(
			styler({
				color: 'black',
				margin: { _: '0.313rem', sm: '0.625rem' },
			}),
		).toEqual({
			color: 'black',
			margin: '0.313rem',
			'@media (min-width: 40.625rem) and (max-width: 48rem)': {
				margin: '0.625rem',
			},
		});
	});
});

describe('styler - mixed plain and responsive styles', () => {
	it('returns plain styles unchanged', () => {
		expect(
			styler({
				color: 'black',
				margin: '0.625rem',
				padding: '0.313rem',
			}),
		).toEqual({
			color: 'black',
			margin: '0.625rem',
			padding: '0.313rem',
		});
	});

	it('mixes plain styles with responsive breakpoint styles', () => {
		expect(
			styler({
				color: 'black',
				margin: { _: '0.313rem', sm: '0.625rem' },
				padding: '0.5rem',
			}),
		).toEqual({
			color: 'black',
			margin: '0.313rem',
			padding: '0.5rem',
			'@media (min-width: 40.625rem) and (max-width: 48rem)': {
				margin: '0.625rem',
			},
		});
	});

	it('mixes plain styles with operator and range breakpoint styles', () => {
		expect(
			styler({
				color: 'black',
				margin: { _: '0.313rem', '<sm': '0.188rem', 'sm:md': '0.438rem' },
				padding: '0.5rem',
			}),
		).toEqual({
			color: 'black',
			margin: '0.313rem',
			padding: '0.5rem',
			'@media (max-width: 40.62rem)': {
				margin: '0.188rem',
			},
			'@media (min-width: 40.625rem) and (max-width: 64rem)': {
				margin: '0.438rem',
			},
		});
	});
});

describe('styler - all combinations', () => {
	it('applies only base (_) values with non-empty string', () => {
		expect(
			styler({
				color: { _: 'black' },
			}),
		).toEqual({
			color: 'black',
		});
	});

	it('applies only base (_) values with empty string', () => {
		expect(
			styler({
				color: { _: '' },
			}),
		).toEqual({
			color: '',
		});
	});

	it('applies exact breakpoints with base null', () => {
		expect(
			styler({
				color: { _: null, sm: 'blue', md: 'green' },
			}),
		).toEqual({
			color: null,
			'@media (min-width: 40.625rem) and (max-width: 48rem)': {
				color: 'blue',
			},
			'@media (min-width: 48rem) and (max-width: 64rem)': {
				color: 'green',
			},
		});
	});

	it('applies operator breakpoints (<, >) with base empty string', () => {
		expect(
			styler({
				color: { _: '', '<sm': 'gray', 'md>': 'red' },
			}),
		).toEqual({
			color: '',
			'@media (max-width: 40.62rem)': {
				color: 'gray',
			},
			'@media (min-width: 64.01rem)': {
				color: 'red',
			},
		});
	});

	it('applies range breakpoints with base empty string', () => {
		expect(
			styler({
				color: { _: '', 'sm:md': 'orange' },
			}),
		).toEqual({
			color: '',
			'@media (min-width: 40.625rem) and (max-width: 64rem)': {
				color: 'orange',
			},
		});
	});

	it('base + exact: exact overrides base in breakpoint range', () => {
		expect(
			styler({
				color: { _: 'black', sm: 'blue' },
			}),
		).toEqual({
			color: 'black',
			'@media (min-width: 40.625rem) and (max-width: 48rem)': {
				color: 'blue',
			},
		});
	});

	it('base + operator: operator overrides base in its range', () => {
		expect(
			styler({
				color: { _: 'black', '<sm': 'gray' },
			}),
		).toEqual({
			color: 'black',
			'@media (max-width: 40.62rem)': {
				color: 'gray',
			},
		});
	});

	it('base + range: range overrides base in its range', () => {
		expect(
			styler({
				color: { _: 'black', 'sm:md': 'orange' },
			}),
		).toEqual({
			color: 'black',
			'@media (min-width: 40.625rem) and (max-width: 64rem)': {
				color: 'orange',
			},
		});
	});

	it('operator + exact: exact overrides operator in overlapping ranges', () => {
		expect(
			styler({
				color: { _: '', '<md': 'gray', md: 'green' },
			}),
		).toEqual({
			color: '',
			'@media (max-width: 47.99rem)': {
				color: 'gray',
			},
			'@media (min-width: 48rem) and (max-width: 64rem)': {
				color: 'green',
			},
		});
	});

	it('operator + range: range overrides operator when overlapping', () => {
		expect(
			styler({
				color: { _: '', '<lg': 'gray', 'sm:md': 'orange' },
			}),
		).toEqual({
			color: '',
			'@media (max-width: 63.99rem)': {
				color: 'gray',
			},
			'@media (min-width: 40.625rem) and (max-width: 64rem)': {
				color: 'orange',
			},
		});
	});

	it('range + exact: exact overrides range when overlapping', () => {
		expect(
			styler({
				color: { _: '', 'sm:md': 'orange', md: 'green' },
			}),
		).toEqual({
			color: '',
			'@media (min-width: 40.625rem) and (max-width: 64rem)': {
				color: 'orange',
			},
			'@media (min-width: 48rem) and (max-width: 64rem)': {
				color: 'green',
			},
		});
	});

	it('all types together: exact > range > operator > base precedence', () => {
		expect(
			styler({
				color: {
					_: 'black',
					'<md': 'gray',
					'sm:md': 'orange',
					md: 'green',
				},
			}),
		).toEqual({
			color: 'black',
			'@media (max-width: 47.99rem)': {
				color: 'gray',
			},
			'@media (min-width: 40.625rem) and (max-width: 64rem)': {
				color: 'orange',
			},
			'@media (min-width: 48rem) and (max-width: 64rem)': {
				color: 'green',
			},
		});
	});

	it('does not override exact value with operator or range', () => {
		expect(
			styler({
				margin: {
					_: '0.313rem',
					'<md': '0.375rem',
					'sm:md': '0.5rem',
					sm: '0.625rem',
				},
			}),
		).toEqual({
			margin: '0.313rem',
			'@media (max-width: 47.99rem)': {
				margin: '0.375rem',
			},
			'@media (min-width: 40.625rem) and (max-width: 64rem)': {
				margin: '0.5rem',
			},
			'@media (min-width: 40.625rem) and (max-width: 48rem)': {
				margin: '0.625rem',
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

	it('generates min-only when min equals max', () => {
		expect(generateRangeMediaQuery([61.25, 61.25])).toBe('@media (min-width: 61.25rem)');
	});

	it('generates min-only if max is undefined', () => {
		expect(generateRangeMediaQuery([100])).toBe('@media (min-width: 100rem)');
	});

	it('generates max-width query for < operator', () => {
		expect(generateRangeMediaQuery([40, 50], '<')).toBe('@media (max-width: 39.99rem)');
	});

	it('generates min-width query for > operator', () => {
		expect(generateRangeMediaQuery([64], '>')).toBe('@media (min-width: 64.01rem)');
	});

	it('generates media query with maxRange override', () => {
		expect(generateRangeMediaQuery([40, 50], null, 55)).toBe(
			'@media (min-width: 40rem) and (max-width: 55rem)',
		);
	});

	it('generates max-width query for < operator on single-value range', () => {
		expect(generateRangeMediaQuery([100], '<')).toBe('@media (max-width: 99.99rem)');
	});

	it('generates min-width query for > operator on single-value range', () => {
		expect(generateRangeMediaQuery([100], '>')).toBe('@media (min-width: 100.01rem)');
	});

	it('generates min-width query for > operator with min and max both defined', () => {
		expect(generateRangeMediaQuery([75, 90], '>')).toBe('@media (min-width: 90.01rem)');
	});

	it('generates max-width query for < operator with min and max both defined', () => {
		expect(generateRangeMediaQuery([30, 40.625], '<')).toBe('@media (max-width: 29.99rem)');
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
