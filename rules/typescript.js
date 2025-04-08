import tsParser from "@typescript-eslint/parser";
import importPlugin from 'eslint-plugin-import';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin'

export default tseslint.config(
  {
    name: "eslint-config-nbs/typescript",
    files: [
      "**/*.ts"
    ],
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommendedTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],
    plugins: {
      'import': importPlugin,
      '@stylistic': stylistic
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2018,
      },
    },
    rules: {
      "no-underscore-dangle": "off",
      "no-useless-escape": "off",
      "max-len": "off",
      "no-duplicate-imports": "error",
      "no-empty": "error",
      "no-param-reassign": "error",
      "no-redeclare": "error",
      "curly": [
        "error",
        "multi-line"
      ],
      "default-case": "error",
      "@typescript-eslint/adjacent-overload-signatures": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/naming-convention": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-unnecessary-boolean-literal-compare": "off",
      "@typescript-eslint/no-use-before-define": "error",
      "@typescript-eslint/no-var-requires": "error",
      "@typescript-eslint/strict-boolean-expressions": "off",
      "@typescript-eslint/interface-name-prefix": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/prefer-reduce-type-parameter": "error",
      "@typescript-eslint/prefer-return-this-type": "error",
      "@typescript-eslint/consistent-indexed-object-style": "error",
      "@typescript-eslint/prefer-readonly": "error",
      "@typescript-eslint/member-ordering": [
        "error",
        {
          "default": [
            "signature",
            "public-static-field",
            "protected-static-field",
            "private-static-field",
            "public-decorated-field",
            "protected-decorated-field",
            "private-decorated-field",
            "public-instance-field",
            "protected-instance-field",
            "private-instance-field",
            "public-abstract-field",
            "protected-abstract-field",
            "abstract-field",
            "public-static-method",
            "protected-static-method",
            "public-static-get",
            "public-static-set",
            "protected-static-get",
            "protected-static-set",
            "private-static-method",
            "private-static-get",
            "private-static-set",
            "public-instance-get",
            "public-instance-set",
            "protected-instance-get",
            "protected-instance-set",
            "public-constructor",
            "protected-constructor",
            "public-instance-method",
            "protected-instance-method",
            "private-constructor",
            "private-instance-method",
            "private-instance-get",
            "private-instance-set"
          ]
        }
      ],
      "@stylistic/array-bracket-spacing": [
        "error",
        "never"
      ],
      "@stylistic/array-element-newline": [
        "error",
        "consistent"
      ],
      "@stylistic/arrow-parens": [
        "error",
        "as-needed",
        { "requireForBlockBody": true }
      ],
      "@stylistic/arrow-spacing": [
        "error",
        { "before": true, "after": true }
      ],
      "@stylistic/block-spacing": [
        "error",
        "always"
      ],
      "@stylistic/brace-style": "error",
      "comma-dangle": [
        "error",
        "always-multiline"
      ],
      "@stylistic/comma-spacing": [
        "error",
        { "before": false, "after": true }
      ],
      "@stylistic/comma-style": [
        "error",
        "last"
      ],
      "@stylistic/computed-property-spacing": [
        "error",
        "never"
      ],
      "@stylistic/func-call-spacing": [
        "error",
        "never"
      ],
      "@stylistic/function-call-argument-newline": [ "error", "consistent" ],
      "@stylistic/function-paren-newline": [ "error", "multiline-arguments" ],
      "import/extensions": "off",
      "import/no-unresolved": "off",
      "import/order": ["error", {"newlines-between": "ignore"}],
      "import/prefer-default-export": "off",
      "@stylistic/indent": [
        "error",
        2,
        {
          "SwitchCase": 1
        }
      ],
      "@stylistic/key-spacing": [
        "error",
        { "beforeColon": false, "afterColon": true, "mode": "minimum" }
      ],
      "@stylistic/keyword-spacing": [
        "error",
        { "before": true, "after": true }
      ],
      "@stylistic/linebreak-style": [
        "error",
        "unix"
      ],
      "@stylistic/new-parens": ["error", "always"],
      "@stylistic/no-trailing-spaces": "error",
      "@stylistic/no-whitespace-before-property": "error",
      "@stylistic/nonblock-statement-body-position": [
        "error",
        "beside",
        { "overrides": { "while": "any", "do": "any" } }
      ],
      "@stylistic/object-curly-newline": [
        "error",
        { "multiline": true, "consistent": true }
      ],
      "@stylistic/object-curly-spacing": ["error", "always"] ,
      "@stylistic/object-property-newline": [
        "error",
        { "allowAllPropertiesOnSameLine": true }
      ],
      "@stylistic/semi": [
        "error",
        "always"
      ],
      "@stylistic/semi-spacing": [
        "error",
        { "before": false, "after": true }
      ],
      "@stylistic/semi-style": ["error", "last"],
      "@stylistic/space-before-blocks": [
        "error",
        "always"
      ],
      "@stylistic/space-before-function-paren": [
        "error",
        {
          "anonymous": "always",
          "named": "never"
        }
      ],
      "@stylistic/space-in-parens": [
        "error",
        "never"
      ],
      "@stylistic/space-infix-ops": [
        "error",
        { "int32Hint": true }
      ],
      "@stylistic/space-unary-ops": [
        "error",
        { "words": true, "nonwords": false }
      ],
      "@stylistic/switch-colon-spacing": [
        "error",
        { "after": true, "before": false }
      ],
      "@stylistic/template-curly-spacing": [
        "error",
        "never"
      ],
      "@stylistic/template-tag-spacing": [
        "error",
        "never"
      ]
    }
  }
)