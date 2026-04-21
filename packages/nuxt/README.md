# ESLint Config for Nuxt projects

Futured's approach to styling Nuxt projects.

## Installation

```bash
$ npm install @futuredapp/eslint-config-nuxt --save-dev
```

or

```bash
$ yarn add @futuredapp/eslint-config-nuxt -D
```

or

```bash
$ pnpm add @futuredapp/eslint-config-nuxt -D
```

## Usage

Add the ESLint configuration to `eslint.config.mjs`:

### eslint.config.mjs

```js
import futuredNuxt from '@futuredapp/eslint-config-nuxt'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  ...futuredNuxt
)
```

## WebStorm

To update WebStorm to use the ESLint configuration on save, follow these steps:

1. Press **⌘ Сmd 0**, to open settings and then select **Languages & Frameworks | JavaScript | Code Quality Tools | ESLint**.

2. Select **Automatic ESLint Configuration**.

3. Check **Run `eslint --fix` on save**.

4. Click **Apply** to save the changes and close the dialog.