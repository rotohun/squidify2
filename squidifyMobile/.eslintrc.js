var recursiveImportOptions = require('./recursiveimportrc');
var extensionLintOptions = require('./platformspecificextensionsrc').extensionLintOptions;

module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: ['react', 'jsx-a11y', 'import'],
  rules: {
    'react/jsx-filename-extension': ['off'],
    'linebreak-style': ['error', 'unix'],
    'no-undef': ['error'],
    'no-unused-vars': ['error'],
    'no-underscore-dangle': ['off'],
    'react/sort-comp': ['off'],
    'brace-style': [0],
    'object-shorthand': ['error', 'never'],
    'no-else-return': [0],
    'no-useless-constructor': [0],
    'no-unused-expressions': ['error', { 'allowShortCircuit': true, 'allowTernary': true }],
    'react/prefer-stateless-function': [0],
    'prefer-template': [0],
    'react/forbid-prop-types': [0],
    'react/prop-types': [2, { 'skipUndeclared': true }],
    'max-len': ['error', 200],
    'react/jsx-curly-brace-presence': ['error', { 'props': 'always'}],
    'arrow-body-style': ['error', 'always'],
    'no-plusplus': [0],
    'no-minusminus': [0],
    'prefer-destructuring': [0],
    'react/destructuring-assignment': [0],
    'object-curly-newline': ['error', {
      ObjectExpression: { minProperties: 7, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 7, multiline: true, consistent: true },
      ImportDeclaration: { minProperties: 7, multiline: true, consistent: true },
      ExportDeclaration: { minProperties: 7, multiline: true, consistent: true },
    }],
    'react/jsx-boolean-value': ['error', 'always'],
    'react/no-access-state-in-setstate': [0],
    'react/no-array-index-key': [0],
  },
  globals: {
    it: 0,
    expect: 0,
    describe: 0,
    navigator: 0,
    require: 0,
  },
  settings: {
    'import/resolver': {
      'recursive-import': recursiveImportOptions,
      'react-native': extensionLintOptions,
    },
  },
  env: {
    jest: true
  },
};
