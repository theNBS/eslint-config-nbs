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
      files: [
        "*.ts"
      ],
      rules: {
        "no-underscore-dangle": "off",
        "no-useless-escape": "off",
        "max-len": "off",
        "@typescript-eslint/adjacent-overload-signatures": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-empty-function": "error",
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-require-imports": "error",
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "off",
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
          { "beforeColon": false, "afterColon": true, "mode": "minimum" }
        ],
        "keyword-spacing": [
          "error",
          { "before": true, "after": true }
        ],
        "linebreak-style": [
          "error",
          "unix"
        ],
        "new-parens": ["error", "always"],
        "no-duplicate-imports": "error",
        "no-empty": "error",
        "no-param-reassign": "error",
        "no-redeclare": "error",
        "no-trailing-spaces": "error",
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
    }
  ]
};
