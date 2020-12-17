module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-unused-vars': 2,
    'react/prop-types': 0,
    'react/display-name': 0,
  },
};
