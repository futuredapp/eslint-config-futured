export default {
    rules: {
        'vue/no-unused-components': [
            'error',
            {
                ignoreWhenBindingPresent: true,
            },
        ],
        'vue/html-quotes': ['error', 'double', { 'avoidEscape': false }],
        'vue/no-v-text-v-html-on-component': 'off',
    }
}