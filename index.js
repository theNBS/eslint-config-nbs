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
    "eslint-plugin-prefer-arrow",
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
      files: [
        "*.ts"
      ],
      rules: {
        "@typescript-eslint/naming-convention": [ "error", { "selector": "enumMember", "format": ["PascalCase"] } ],
        "@typescript-eslint/no-empty-function": "error",
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-require-imports": "error",
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "off",
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/no-use-before-define": "error",
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any": "off",
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
        "array-bracket-spacing": [
          "error",
          "never"
        ],
        "array-element-newline": [
          "error",
          "consistent"
        ],
        "arrow-parens": [
          "error",
          "as-needed",
          { "requireForBlockBody": true }
        ],
        "arrow-spacing": [
          "error",
          { "before": true, "after": true }
        ],
        "block-spacing": [
          "error",
          "always"
        ],
        "brace-style": [
          "error",
          "1tbs"
        ],
        "comma-dangle": [
          "error",
          "always-multiline"
        ],
        "comma-spacing": [
          "error",
          { "before": false, "after": true }
        ],
        "comma-style": [
          "error",
          "last"
        ],
        "computed-property-spacing": [
          "error",
          "never"
        ],
        "curly": [
          "error",
          "multi-line"
        ],
        "default-case": "error",
        "func-call-spacing": [
          "error",
          "never"
        ],
        "function-call-argument-newline": [ "error", "consistent" ],
        "function-paren-newline": [ "error", "multiline-arguments" ],
        "import/extensions": "off",
        "import/no-unresolved": "off",
        "import/order": ["error", {"newlines-between": "ignore"}],
        "import/prefer-default-export": "off",
        "indent": [
          "error",
          2,
          {
            "SwitchCase": 1
          }
        ],
        "key-spacing": [
          "error",
          { "beforeColon": false, "afterColon": true }
        ],
        "keyword-spacing": [
          "error",
          { "before": true, "after": true }
        ],
        "linebreak-style": [
          "error",
          "unix"
        ],
        "lines-between-class-members": [
          "error",
          "always",
          { "exceptAfterSingleLine": true }
        ],
        "max-len": [
          "error",
          { "code": 180 }
        ],
        "new-parens": ["error", "always"],
        "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 2 }],
        "no-duplicate-imports": "error",
        "no-empty": "error",
        "no-multi-spaces": [
          "error",
          { "ignoreEOLComments": true }
        ],
        "no-param-reassign": "error",
        "no-redeclare": "error",
        "no-trailing-spaces": "error",
        "no-underscore-dangle": ["error", { "allowAfterThis": true }],
        "no-whitespace-before-property": "error",
        "nonblock-statement-body-position": [
          "error",
          "beside",
          { "overrides": { "while": "any", "do": "any" } }
        ],
        "object-curly-newline": [
          "error",
          { "multiline": true, "consistent": true }
        ],
        "object-curly-spacing": ["error", "always"] ,
        "object-property-newline": [
          "error",
          { "allowAllPropertiesOnSameLine": true }
        ],
        "operator-linebreak": ["error", "after", { "overrides": { "?": "before", ":": "before" } }],
        "padding-line-between-statements": [
          "error",
          { "blankLine": "always", "prev": "*", "next": "return" },
          { "blankLine": "always", "prev": ["if", "do", "while", "try", "switch"], "next": "*" },
          { "blankLine": "always", "prev": "*", "next": ["if", "do", "while", "try", "switch"] },
          { "blankLine": "always", "prev": "import", "next": "*"},
          { "blankLine": "any",    "prev": "import", "next": "import"}
        ],
        "semi": [
          "error",
          "always"
        ],
        "semi-spacing": [
          "error",
          { "before": false, "after": true }
        ],
        "space-before-blocks": [
          "error",
          "always"
        ],
        "space-before-function-paren": [
          "error",
          {
            "anonymous": "always",
            "named": "never"
          }
        ],
        "space-in-parens": [
          "error",
          "never"
        ],
        "space-infix-ops": [
          "error",
          { "int32Hint": true }
        ],
        "space-unary-ops": [
          "error",
          { "words": true, "nonwords": false }
        ],
        "switch-colon-spacing": [
          "error",
          { "after": true, "before": false }
        ],
        "template-curly-spacing": [
          "error",
          "never"
        ],
        "template-tag-spacing": [
          "error",
          "never"
        ]
      }
    },
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
