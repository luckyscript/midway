module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['<rootDir>/test/fixtures'],
  coveragePathIgnorePatterns: ['<rootDir>/test/', '<rootDir>/dist/'],
  coverageProvider: 'v8',
  transform: {
    '^.+\\.tsx$': ['ts-jest', { isolatedModules: true }],
  },
};
