module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier'
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        '@typescript-eslint',
        'prettier'
    ],
    'rules': {
        quotes: ['error', 'single'],
                'no-console': 1, // Means error// 2 means never used
                'no-var': 'error',
                'prefer-const': 'error'
    }
}
