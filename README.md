# ESLint Config for Futured projects

Futured's approach to JavaScript styling combines both the ESLint rules and Prettier to create an opinionated set of styling and linting rules. These rules can be applied to your TypeScript projects.

## Guides

This monorepo contains styling guides for:

* [Quasar](./packages/quasar)
* [Nest](./packages/___nest)

## Plugins and Extensions

These guides include the following plugins and extensions:

* JavaScript
    - [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier)
    - [`prettier`](https://www.npmjs.com/package/prettier)
* TypeScript
    - [`@typescript-eslint`](https://github.com/typescript-eslint/typescript-eslint)
* Vue
    - [`vue-eslint-parser`](https://github.com/vuejs/vue-eslint-parser)
    - [`eslint-plugin-vue`](https://github.com/vuejs/eslint-plugin-vue)

## [Rules](packages/rules)

These are custom rules that override the default rules defined by the plugins and extensions. This package contains the following rules:

* [core](packages/rules/core.js)
  - basic rules for most project files, like (not) using semicolons, type of quotes, etc.
* [typescript](packages/rules/typescript.js)
  - own rules for TypeScript files
* [vue](packages/rules/vue.js)
  - own rules for Vue files

## Usage

Please refer to the guides above for instructions on how to use each configuration.