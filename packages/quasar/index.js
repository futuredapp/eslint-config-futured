import typescriptEslint from 'typescript-eslint'
import vue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import globals from 'globals'
import prettier from 'eslint-config-prettier'
import rules from '@futuredapp/eslint-config-rules'

export default [
    prettier,
    {
        files: ['**/*.{js,mjs,ts,jsx,tsx,vue}'],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
            globals: {
                ...globals.node,
                ...globals.browser,
                ...globals.es2021,
                ga: 'readonly', // Google Analytics
                cordova: 'readonly',
                __statics: 'readonly',
                __QUASAR_SSR__: 'readonly',
                __QUASAR_SSR_SERVER__: 'readonly',
                __QUASAR_SSR_CLIENT__: 'readonly',
                __QUASAR_SSR_PWA__: 'readonly',
                process: 'readonly',
                Capacitor: 'readonly',
                chrome: 'readonly',
            },
        },
        ...rules.core,
    },
    ...typescriptEslint.configs.recommended,
    {
        files: ['**/*.{ts,tsx,vue}'],
        languageOptions: {
            parser: typescriptEslint.parser,
            parserOptions: {
                project: './tsconfig.json',
            },
        },
        ...rules.typescript,
    },
    ...vue.configs['flat/essential'],
    {
        files: ['**/*.vue'],
        plugins: {
            vue,
        },
        languageOptions: {
            parser: vueParser,
            parserOptions: {
                extraFileExtensions: ['.vue'],
                parser: typescriptEslint.parser,
                project: './tsconfig.json',
                ecmaVersion: 2021,
                sourceType: 'module',
            },
        },
        ...rules.vue
    },
]