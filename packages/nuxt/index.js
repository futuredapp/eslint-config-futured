import prettier from 'eslint-config-prettier'
import rules from '@futuredapp/eslint-config-rules'
import globals from 'globals'
import typescriptEslintParser from '@typescript-eslint/parser'
import vueEslintParser from 'vue-eslint-parser'

export default [
    prettier,
    {
        files: ['**/*.{js,mjs,ts,jsx,tsx,vue}'],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2021,
                useHead: 'readonly',
                useSeoMeta: 'readonly',
                useRoute: 'readonly',
                useRouter: 'readonly',
                useState: 'readonly',
                defineNuxtPlugin: 'readonly',
                defineNuxtRouteMiddleware: 'readonly',
                defineNuxtComponent: 'readonly',
                defineNuxtLink: 'readonly',
                useRuntimeConfig: 'readonly',
                useLazyAsyncData: 'readonly',
                useAsyncData: 'readonly',
                useFetch: 'readonly',
                $fetch: 'readonly',
                process: 'readonly',
            },
        },
        rules: rules.core.rules,
    },
    {
        files: ['**/*.{ts,tsx,vue}'],
        languageOptions: {
            parser: typescriptEslintParser,
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: process.cwd(),
                extraFileExtensions: ['.vue'],
            },
        },
        ...(rules.typescript ? { rules: rules.typescript.rules } : {}),
    },
    {
        files: ['**/*.vue'],
        languageOptions: {
            parser: vueEslintParser,
            parserOptions: {
                parser: typescriptEslintParser,
                ecmaVersion: 2021,
                sourceType: 'module',
                project: './tsconfig.json',
                extraFileExtensions: ['.vue'],
            },
        },
        rules: rules.vue.rules,
    },
]