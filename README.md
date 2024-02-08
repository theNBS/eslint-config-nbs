# eslint-config-nbs

[![npm version](https://badge.fury.io/js/eslint-config-nbs.svg)](https://badge.fury.io/js/eslint-config-nbs)

NBS ESLint config for TypeScript projects

## Usage

Install with npm:

```sh
npm install eslint-config-nbs --savedev
```

Add a `.eslintrc.js` or `.eslintrc.json` file to the root of your repo. Configure ESLint to use the NBS config.

e.g.:

```javascript
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: [
      'tsconfig.json',
      'tsconfig.spec.json',
    ],
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'eslint-config-nbs',
  ],
  root: true,
  env: {
    node: true,
    jasmine: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  // Override or set any additional rules
  rules: {
    "no-underscore-dangle": "off",
  }
};
```

### Recommended

Add a `.eslintignore` to the root of your repo with `node_modules`.

## Available configs

From `v2.3.0` this package now exports multiple configs which you can extend in your own projects.

| Config name | Description |
|-------------|-------------|
| `eslint-config-nbs` | The default config, this exports both the `typescript` and `jasmine` configs |
| `eslint-config-nbs/typescript` | Our [TypeScript](https://www.typescriptlang.org) linting rules |
| `eslint-config-nbs/jasmine` | Our [Jasmine](https://jasmine.github.io) linting rules |
