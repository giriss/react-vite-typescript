/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./.jest/jest-setup.cjs'],
  collectCoverage: true,
  moduleNameMapper: {
    '^@react-vite/(.*)$': '<rootDir>/src/$1',
  },
}
