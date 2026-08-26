# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Releases that require consumers to do more than bump the version number include a
**Migration** section describing exactly what to change.

## [4.0.0] - 2026-08-26

Replaces `eslint-plugin-import` with `eslint-plugin-import-x` and moves the package to ESLint 10.

### Changed

- **BREAKING** — `eslint-plugin-import` replaced with
  [`eslint-plugin-import-x`](https://github.com/un-ts/eslint-plugin-import-x) `^4.17.1`. All rules
  provided by this config now live under the `import-x/*` namespace instead of `import/*`.
- **BREAKING** — peer dependency `eslint` raised from `>= 9` to `>= 10`.
- Dependency updates: `@eslint/js` `~10.0.1`, `@stylistic/eslint-plugin` `^5.10.0`,
  `eslint-config-prettier` `^10.1.8`, `eslint-plugin-jasmine` `^4.2.2`,
  `typescript-eslint` `^8.67.0`.

### Removed

- `@typescript-eslint/interface-name-prefix` dropped from the TypeScript config. The rule was removed
  from `typescript-eslint` in v4 (superseded by `naming-convention`), so the entry referenced a rule
  that no longer exists and could never report. It was set to `"off"`, which is also why it never
  triggered the "rule not found" error that an unknown rule raises at `error` severity. No behaviour
  change: diffing the fully resolved config before and after shows the key itself disappearing and
  no other rule's severity or options changing. No consumer action needed.

### Fixed

- `import/order` crashed under ESLint 10 with
  `TypeError: sourceCode.getTokenOrCommentBefore is not a function`. `SourceCode#getTokenOrCommentBefore`
  was removed in ESLint 10 and upstream `eslint-plugin-import` has no v10 support planned;
  `eslint-plugin-import-x` supports ESLint 10 natively.
- `@stylistic/func-call-spacing` renamed to `@stylistic/function-call-spacing`. The rule was renamed
  in `@stylistic/eslint-plugin` v5, so the old name no longer resolves and ESLint aborts with
  `Could not find "func-call-spacing" in plugin "@stylistic"`. This was masked for consumers who
  apply `eslint-config-prettier` after this config — it sets that rule to `off`, and ESLint skips
  validating unknown rules at severity `0`. Consumers not using Prettier would have hit a hard crash.
- The `jasmine` config now registers the `jasmine` plugin. `eslint-plugin-jasmine`'s `recommended`
  config only supplies `rules` and no `plugins` key, so extending it under flat config produced
  `could not find plugin "jasmine"` and the config was unusable standalone. This was a pre-existing
  bug — the plugin has had the same shape since at least v4.1.3.
- `globals` and `@typescript-eslint/parser` are now declared as direct dependencies. Both are
  imported by the rule files but were previously only resolved transitively via
  `eslint-plugin-import`, so the config failed to load once that package was removed.

### Migration

**1. Upgrade to ESLint 10 first.** The peer range is now `>= 10`. If you are still on ESLint 9,
stay on `eslint-config-nbs@3.x` until you have upgraded — v4 will not install cleanly.

**2. Rename any `import/*` rule overrides to `import-x/*`.** If your `eslint.config.mjs` sets any of
these rules itself, the keys must change:

```diff
-"import/order": ["error", { "newlines-between": "always" }],
+"import-x/order": ["error", { "newlines-between": "always" }],
```

Rule names and options are otherwise identical between the two plugins.

**3. Rename inline disable comments — these fail silently.** This is the one to watch. An
`eslint-disable` comment naming a rule that is no longer registered does **not** raise an error; the
comment simply stops suppressing anything and the rule starts reporting:

```diff
-// eslint-disable-next-line import/order
+// eslint-disable-next-line import-x/order
```

Find them all with:

```sh
grep -rn "eslint-disable.*import/" src apps libs --include="*.ts" --include="*.tsx"
```

**4. Remove local workarounds for the old plugin.** If you added an `overrides` entry to force
ESLint 10 onto `eslint-plugin-import`, delete it — it is no longer needed and will now fail to
resolve:

```diff
-"eslint-plugin-import": {
-  "eslint": "$eslint"
-}
```

Also drop any direct `eslint-plugin-import` dependency, unless you use it independently of this
config.

**5. Expect a one-off reordering diff.** `import-x/order` is a fork of the original rule and its
sort output is not guaranteed byte-identical. Run `eslint --fix` once, review the diff, and land the
reordering as its own commit so it does not get mixed into unrelated work.

**6. Allow the `unrs-resolver` install script if your repo gates them.** `eslint-plugin-import-x`
depends on `unrs-resolver`, which has a `postinstall` step. Repos using `allowScripts` (or a similar
gate) need an entry for it, otherwise resolution may fall back or fail:

```json
"allowScripts": {
  "unrs-resolver@1.12.2": true
}
```
