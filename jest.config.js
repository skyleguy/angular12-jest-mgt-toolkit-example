require('jest-preset-angular/ngcc-jest-processor');

module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    transform: {
      "^.+\\.(ts|html)$": "jest-preset-angular",
      "^.+\\.js$": "babel-jest"
    },
    transformIgnorePatterns: [
      '<rootDir>/node_modules/(?!@microsoft|lit-html|lit-element)'
    ]
  };