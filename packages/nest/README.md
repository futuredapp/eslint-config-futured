# ESLint Config for Nest projects

Futured's approach to styling Nest projects.

## Installation

```bash
$ npm install eslint nest-eslint-config-futured --save-dev
```

or 

```bash
$ yarn add eslint nest-eslint-config-futured -D
```

## Usage

Add the ESLint configuration to either your `eslint.config.mjs` or `eslint.config.js`:

### eslint.config.(m)js

```js
import eslintConfig from 'nest-eslint-config-futured'

export default [
  {
    // Files to ignore must be listed first
    ignores: [], 
  },
  ...eslintConfig,
  {
    rules: {
      // your custom rules
    },
  },
]
```

## WebStorm

To update WebStorm to use the ESLint configuration on save, follow these steps:

1. Press **⌘ Сmd 0**, to open settings and then select **Languages & Frameworks | JavaScript | Code Quality Tools | ESLint**.

2. Select **Manual ESLint Configuration**.

3. In the Extra eslint options field, type `--flag unstable_ts_config`.

4. Click **Apply** to save the changes and close the dialog.