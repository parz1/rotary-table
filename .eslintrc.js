module.exports = {
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'prettier'],
  rules: {
    quotes: ['error', 'single'],
    'eol-last': ['error', 'always'],
    'no-unused-vars': 1,
  },
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
}
