const path = require('path');

module.exports = {
  rootDir: __dirname,
  clearMocks: true,
  verbose: true,
  globals: {
    NODE_ENV: 'test',
    'ts-jest': {
      tsconfig: './tsconfig.test.json',
    },
  },
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  coveragePathIgnorePatterns: [
    '/node_modules/',
    path.join(__dirname, 'build'),
    path.join(__dirname, 'storybook-static'),
  ],
  testMatch: [
    path.join(__dirname, 'tests/**/*.test.ts'),
    path.join(__dirname, 'tests/**/*.test.tsx'),
  ],
  moduleDirectories: ['node_modules', 'src'],
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper: {
    '^.+.(css)$': '<rootDir>/jest.mock.js',
  },
};
