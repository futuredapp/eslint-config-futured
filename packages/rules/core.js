export default {
    plugins: [
        '@stylistic',
        'import',
        'security'
    ],
    rules: {
        '@stylistic/semi': ['error', 'never'],
        '@stylistic/quotes': ['error', 'single'],
        '@stylistic/comma-dangle': ['error', 'always-multiline'],
        '@stylistic/object-curly-spacing': ['error', 'always'],
        '@stylistic/space-before-function-paren': ['error', { 'anonymous': 'always', 'named': 'never', 'asyncArrow': 'always' }],
        'no-unused-vars': 'off',
        'prefer-const': 'error',
        'prefer-promise-reject-errors': 'error',
        'no-extra-boolean-cast': 'error',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'no-alert': 'error',
        'no-eval': 'error',
        'no-implied-eval': 'error',
        'require-await': 'error',
        'no-shadow': 'error',
        'no-undef': 'error',
        'no-unreachable': 'error',
        'no-var': 'error',
        'no-constant-condition': 'error',
        'no-unused-expressions': 'error',
        'no-unused-labels': 'error',
        'security/detect-object-injection': 'warn',
        'security/detect-non-literal-fs-filename': 'warn',
        'security/detect-non-literal-require': 'warn',
        'import/order': ['error', {
            'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
            'newlines-between': 'always',
            'alphabetize': { 'order': 'asc' }
        }],
        'import/no-duplicates': 'error',
        'import/no-unresolved': 'error',
        'import/no-cycle': 'error',
    }
}