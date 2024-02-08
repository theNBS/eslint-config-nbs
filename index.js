module.exports = {
  extends: [
    './rules/typescript',
    './rules/jasmine',
  ].map(require.resolve),
  rules: {},
};
