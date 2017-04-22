module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'jasmine': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:jasmine/recommended'
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'experimentalObjectRestSpread': true,
            'jsx': true
        },
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        'jasmine'
    ],
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ]
    },
    'settings': {
        'react': {
            'createClass': 'createClass', // Regex for Component Factory to use, default to "createClass"
            'pragma': 'React',  // Pragma to use, default to "React"
            'version': '15.0' // React version, default to the latest React stable release
        }
    }
};