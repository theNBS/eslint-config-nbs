# eslint-config-nbs

[![npm version](https://badge.fury.io/js/eslint-config-nbs.svg)](https://badge.fury.io/js/eslint-config-nbs)

NBS ES Lint config for TypeScript projects

## Usage

Install with npm:

```sh
npm install eslint-config-nbs --savedev
```

Add a `.eslintrc.js` or `.eslintrc.json` file to the root of your repo. Confiure ES Lint to use the NBS config.

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

#### Recommended

Add a `.eslintignore` to the root of your repo with `node_modules` 