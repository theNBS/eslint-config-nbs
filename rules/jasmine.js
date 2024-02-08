module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2018,
  },
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "eslint-plugin-import",
    "eslint-plugin-jsdoc",
  ],
  env: {
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [
    {
      files: ["src/**/*.spec.ts"],
      extends: ["plugin:jasmine/recommended"],
      plugins: ["jasmine"],
      env: { "jasmine": true },
      rules: {
        "@typescript-eslint/no-unused-vars": "off",
        "jasmine/expect-single-argument": "off",
        "jasmine/new-line-before-expect": "off",
        "jasmine/no-disabled-tests": "off",
        "jasmine/no-pending-tests": "off",
        "jasmine/no-spec-dupes": "off",
        "jasmine/no-suite-dupes": "off",
        "jasmine/no-unsafe-spy": "off",
        "jasmine/prefer-toHaveBeenCalledWith": "off"
      }
    }
  ]
};
