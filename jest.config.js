module.exports = {
    preset: 'ts-jest',
    roots: ['<rootDir>/src'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
        '^.+\\.(css|scss|svg)$': '<rootDir>/test-utils/styleTransformer.ts'
    },
    moduleDirectories: ['node_modules', 'test'],
    moduleNameMapper: {
        '^.+\\-(style)$': '<rootDir>/test-utils/styleTransformer.ts',
        '^.+\\.(css|scss|svg)$': '<rootDir>/test-utils/styleTransformer.ts',
        '^react$': '<rootDir>/node_modules/react',
        '^react-dom$': '<rootDir>/node_modules/react-dom',
        '^react-router$': '<rootDir>/node_modules/react-router'
    },
    testResultsProcessor: 'jest-sonar-reporter',
    setupFilesAfterEnv: ['<rootDir>/test-utils/testSetup.ts']
};
