/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

process.env.TZ = 'UTC';

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  "roots": [
    "<rootDir>/src",
    "<rootDir>/__tests__"
  ],
  
  testMatch: [
    // '(/__tests__/.*|(\\.|/)test)\\.[jt]sx?$',
    '**/src/**/*.test.ts',
    '**/__tests__/**/*.test.ts'
  ]
};