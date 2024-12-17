export default {
    rules: {
        semi: ['error', 'never'],
        quotes: ['error', 'single'],
        'no-unused-vars': 'off',
        'prefer-const': 'error',
        'comma-dangle': ['error', 'always-multiline'],
        'object-curly-spacing': ['error', 'always'],
        'space-before-function-paren': ['error', 'always'],
        'prefer-promise-reject-errors': 'off',
        'no-extra-boolean-cast': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    }
}