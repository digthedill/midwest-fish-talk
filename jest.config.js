module.exports = {
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleNameMapper: {
    "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules",
  },
}
