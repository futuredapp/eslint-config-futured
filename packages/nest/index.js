import typescriptEslint from 'typescript-eslint'
import globals from 'globals'
import prettier from 'eslint-config-prettier'
import rules from '@futuredapp/eslint-config-rules'

export default [
    prettier,
    {
        files: ['**/*.{js,mjs,ts}'],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
            globals: {
                ...globals.node,
                ...globals.es2021,
            },
        },
        ...rules.core,
    },
    ...typescriptEslint.configs.recommended,
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: typescriptEslint.parser,
            parserOptions: {
                project: './tsconfig.json',
            },
        },
        ...rules.typescript,
    }
]