module.exports = {
  preset: "ts-jest",
  "testEnvironment": "jsdom",
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  "moduleNameMapper": {
    "^@root(.*)$": "<rootDir>/src$1",
    "^@components(.*)$": "<rootDir>/src/components$1",
    "^@store(.*)$": "<rootDir>/src/store$1",
    "^@customTypes(.*)$": "<rootDir>/src/customTypes$1",
    "^@constants(.*)$": "<rootDir>/src/constants$1",
    "^@services(.*)$": "<rootDir>/src/services$1",
    "^@assets(.*)$": "<rootDir>/src/assets$1",
    "^@utils(.*)$": "<rootDir>/src/utils$1",
    "^@theme(.*)$": "<rootDir>/src/theme$1",
  }
};
