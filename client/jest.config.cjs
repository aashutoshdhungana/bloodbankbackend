// jest.config.cjs
module.exports = {
    setupFilesAfterEnv: ["./jest.setup.js"],
    transform: {
      '^.+\\.[tj]sx?$': 'babel-jest',
    },
    globals: {
      'babel-jest': {
        configFile: './babel.config.cjs',
      },
    },
    testEnvironment: 'jsdom',  // Add this line to specify the jsdom environment
  };
  