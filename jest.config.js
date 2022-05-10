module.exports = {
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.ts'],
	coveragePathIgnorePatterns: [
		'src/@types',
		'src/main\\.ts$',
	],
	coverageThreshold: {
		global: {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100,
		},
	},
	globals: {
		'ts-jest': {
			tsConfig: 'tsconfig.json',
		},
	},
	moduleDirectories: ['node_modules'],
	moduleFileExtensions: ['js', 'ts'],
	moduleNameMapper: {
		'^@/(.*)': '<rootDir>/src/$1',
	},
	preset: 'ts-jest',
	transform: {
		'^.+\\.ts$': 'ts-jest',
	},
	testEnvironment: 'node',
	testPathIgnorePatterns: [
		'<rootDir>/node_modules/',
		'<rootDir>/build/',
		'<rootDir>/src/@types/',
	],
	testMatch: ['**/*.test.ts'],
	watchPlugins: [
		'jest-watch-typeahead/filename',
		'jest-watch-typeahead/testname',
	],
}







