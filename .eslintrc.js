module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {
    page: true,
  },
  rules: {
    'no-console': 0,
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],
  },
};
