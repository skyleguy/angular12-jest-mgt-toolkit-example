module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    transform: {
      "^.+\\.(ts|html)$": "ts-jest",
      "^.+\\.js$": "babel-jest"
    },
    transformIgnorePatterns: [
      '<rootDir>/node_modules/(?!@microsoft|lit-html|lit-element)'
    ]
  };