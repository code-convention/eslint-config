module.exports = {
  rules: {
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', ignoreRestSiblings: true }],
    '@typescript-eslint/no-explicit-any': ['warn', { ignoreRestArgs: true }],
    '@typescript-eslint/no-empty-function': 'warn',
    'no-unused-vars': 'off',
    'no-explicit-any': 'off',
    'no-empty-function': 'off',
  },
}
