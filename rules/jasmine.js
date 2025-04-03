import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import jsdoc from "eslint-plugin-jsdoc";
import importPlugin from 'eslint-plugin-import';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import jasmineeslint from "eslint-plugin-jasmine";

export default tseslint.config(
  {
    name: "eslint-config-nbs/jasmine",
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommendedTypeChecked,
      jasmineeslint.configs.recommended
    ],
    plugins: {
      jsdoc,
      importPlugin
    },
    files: ["src/**/*.spec.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2018,
      },
      globals: {
        ...globals.node,
        ...globals.jasmine
      }
    },
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
);