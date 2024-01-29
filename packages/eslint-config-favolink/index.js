/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['@stylistic', 'react-refresh'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: true,
      node: true,
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    curly: 'error',
    'dot-notation': 'off',
    eqeqeq: 'error',
    'func-style': ['error', 'declaration'],
    'no-console': 'warn',
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/dot-notation': 'error',
    '@typescript-eslint/method-signature-style': 'error',
    '@typescript-eslint/sort-type-constituents': 'error',
    '@stylistic/padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      {
        blankLine: 'never',
        prev: ['import', 'cjs-import'],
        next: ['import', 'cjs-import'],
      },
      {
        blankLine: 'never',
        prev: ['case', 'break', 'default'],
        next: ['case', 'break', 'default'],
      },
      {
        blankLine: 'never',
        prev: 'directive',
        next: 'directive',
      },
    ],
    'import/no-cycle': 'error',
    'import/no-duplicates': ['error', { 'prefer-inline': true }],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'index',
        ],
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'function-declaration',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-curly-brace-presence': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-pascal-case': 'error',
    'react/no-unused-state': 'error',
    'react/self-closing-comp': 'error',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};
