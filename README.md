# eslint-config-nbs

[![npm version](https://badge.fury.io/js/eslint-config-nbs.svg)](https://badge.fury.io/js/eslint-config-nbs)

NBS ESLint config for TypeScript projects.

## Requirements

- **ESLint 10 or later** (`peerDependencies: eslint >= 10`)
- **Flat config only.** This package provides [flat config](https://eslint.org/docs/latest/use/configure/configuration-files)
  arrays. The legacy `.eslintrc.*` / `extends: ['eslint-config-nbs']` style is not supported.
- **ESM only.** The package is `"type": "module"`. Your config file must be able to `import` it —
  use `eslint.config.mjs`, or `eslint.config.js` in a package that is itself `"type": "module"`.

Still on ESLint 9? Stay on `eslint-config-nbs@3.x`. See [CHANGELOG.md](./CHANGELOG.md) for the
v4 migration steps.

## Install

```sh
npm install --save-dev eslint-config-nbs
```

## Usage

The configs are arrays you spread into your own flat config. Each one already scopes itself to the
files it applies to (see [Available configs](#available-configs)), so you do not need to set `files`
yourself.

```javascript
// eslint.config.mjs
import configs from 'eslint-config-nbs';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['**/node_modules', 'dist/**', 'coverage/**']),

  ...configs.tsRules,
  ...configs.jasmineRules,

  // Override or add any additional rules
  {
    files: ['**/*.ts'],
    rules: {
      'no-underscore-dangle': 'off',
    },
  },
]);
```

You can also import a single config directly via its subpath, which avoids pulling in the other:

```javascript
import tsRules from 'eslint-config-nbs/typescript';
import jasmineRules from 'eslint-config-nbs/jasmine';
```

### Using it as an `extends` entry

If you would rather scope the rules yourself — for example to widen them beyond the default globs —
pass the config to `extends` instead of spreading it:

```javascript
{
  files: ['**/*.ts', '**/*.tsx'],
  extends: [configs.tsRules],
  languageOptions: {
    parserOptions: {
      projectService: true,
    },
  },
}
```

### Type-aware rules

`jasmineRules` extends `recommendedTypeChecked` from
[typescript-eslint](https://typescript-eslint.io), so it requires type information. Enable
`projectService` (or set `project` explicitly) in your `languageOptions.parserOptions`:

```javascript
languageOptions: {
  parserOptions: {
    projectService: true,
  },
}
```

### Prettier

This package does not disable formatting rules for you. If you use
[Prettier](https://prettier.io), add `eslint-config-prettier` **after** the NBS configs so it can
turn off the rules that would conflict:

```javascript
import prettierConfig from 'eslint-config-prettier';

export default defineConfig([
  ...configs.tsRules,
  prettierConfig,
]);
```

## Available configs

| Import | Contents |
|--------|----------|
| `eslint-config-nbs` | Default export: an **object** `{ tsRules, jasmineRules }` — not a config array. Spread the individual properties, as shown above. |
| `eslint-config-nbs/typescript` | Default export: the [TypeScript](https://www.typescriptlang.org) config array. Same value as `configs.tsRules`. |
| `eslint-config-nbs/jasmine` | Default export: the [Jasmine](https://jasmine.github.io) config array. Same value as `configs.jasmineRules`. |

### Default file globs

| Config | Applies to |
|--------|------------|
| `tsRules` | `**/*.ts` |
| `jasmineRules` | `src/**/*.spec.ts` |

> **Note:** `jasmineRules` is scoped to `src/**/*.spec.ts`. In a monorepo where specs live under
> `apps/` or `libs/`, that glob will not match anything. Use the
> [`extends` form](#using-it-as-an-extends-entry) with your own `files` to widen it.

## What's included

`tsRules` builds on `@eslint/js` recommended and `typescript-eslint` recommended, and adds:

- [`@stylistic/eslint-plugin`](https://eslint.style) — formatting and stylistic rules
- [`eslint-plugin-import-x`](https://github.com/un-ts/eslint-plugin-import-x) — import ordering
  (`import-x/order`) and related rules

`jasmineRules` builds on `@eslint/js` recommended, `typescript-eslint` `recommendedTypeChecked`, and
[`eslint-plugin-jasmine`](https://github.com/tlvince/eslint-plugin-jasmine) recommended.

> **Note:** import rules are provided by `eslint-plugin-import-x` and live under the `import-x/*`
> namespace, **not** `import/*`. This changed in v4.0.0 — if you are upgrading from v3, see the
> migration notes in [CHANGELOG.md](./CHANGELOG.md), particularly the part about
> `eslint-disable` comments failing silently.

## Contributing

Releases are documented in [CHANGELOG.md](./CHANGELOG.md). Any release that requires consumers to do
more than bump the version number should include a **Migration** section describing what to change.
