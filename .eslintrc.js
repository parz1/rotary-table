module.exports = {
  parser: "babel-eslint",
  extends: "eslint:recommended",
  rules: {
    quotes: ["error", "double"],
    "eol-last": ["error", "always"],
  },
  parserOptions: {
    sourceType: "module",
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
};
