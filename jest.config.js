module.exports = {
	preset: 'ts-jest',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
	},
	globals: {
		'ts-jest': {
			useESM: true,
		},
	},
	extensionsToTreatAsEsm: ['.ts', '.tsx'],
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
	moduleNameMapper: {},
};
