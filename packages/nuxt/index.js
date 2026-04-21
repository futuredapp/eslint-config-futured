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
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2021,
                useHead: 'readonly',
                useSeoMeta: 'readonly',
                useServerSeoMeta: 'readonly',
                useRoute: 'readonly',
                useRouter: 'readonly',
                useState: 'readonly',
                defineNuxtPlugin: 'readonly',
                defineNuxtRouteMiddleware: 'readonly',
                defineNuxtComponent: 'readonly',
                defineNuxtLink: 'readonly',
                definePageMeta: 'readonly',
                useRuntimeConfig: 'readonly',
                useLazyAsyncData: 'readonly',
                useAsyncData: 'readonly',
                useFetch: 'readonly',
                useLazyFetch: 'readonly',
                $fetch: 'readonly',
                navigateTo: 'readonly',
                abortNavigation: 'readonly',
                createError: 'readonly',
                showError: 'readonly',
                clearError: 'readonly',
                useError: 'readonly',
                useNuxtApp: 'readonly',
                useCookie: 'readonly',
                useNuxtData: 'readonly',
                refreshNuxtData: 'readonly',
                clearNuxtData: 'readonly',
                useRequestEvent: 'readonly',
                useRequestHeaders: 'readonly',
                useRequestURL: 'readonly',
                callOnce: 'readonly',
                useLoadingIndicator: 'readonly',
                useRouteAnnouncer: 'readonly',
                usePreviewMode: 'readonly',
                useHydration: 'readonly',
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
                projectService: true,
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
                ecmaVersion: 'latest',
                sourceType: 'module',
                projectService: true,
                extraFileExtensions: ['.vue'],
            },
        },
        rules: rules.vue.rules,
    },
]