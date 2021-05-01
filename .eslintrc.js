module.exports = {
  extends: ['./rules/eslint.js'],
  plugins: ['babel'],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    allowImportExportEverywhere: true,
  },
  overrides: [
    {
      parser: '@typescript-eslint/parser',
      extends: ['./rules/@typescript-eslint.js'],
      plugins: ['@typescript-eslint/eslint-plugin'],
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  ],
}
