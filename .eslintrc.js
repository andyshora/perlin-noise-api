module.exports = {
  'plugins': [
    'react'
  ],
  'extends': ['airbnb'],
  'settings': {
    'react': {
      'pragma': 'React',
      'version': '15.0'
    }
  },
  'rules': {
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', 'never'],
    'indent': ['error', 2, {'SwitchCase': 1}],
    'jsx-quotes': ['error', 'prefer-single'],
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'max-len': ['error', 120],
    'newline-per-chained-call': ['error', { 'ignoreChainWithDepth': 1 }],
    'no-inline-comments': ['error'],
    'no-underscore-dangle': 'off',
    'operator-linebreak': ['error', 'before'],
    'react/jsx-boolean-value': ['off'],
    'react/jsx-closing-bracket-location': [2, { 'selfClosing': 'after-props', 'nonEmpty': 'after-props' }],
    'react/jsx-filename-extension': [ 1, { 'extensions': ['.js', '.jsx'] } ],
    'react/forbid-prop-types': 'off',
    'require-jsdoc': ['error', {
      "require": {
        "FunctionDeclaration": true,
        "MethodDefinition": true,
        "ClassDeclaration": true,
        "ArrowFunctionExpression": true
      }
    }],
    'react/prefer-es6-class': ['error', 'always'],
    'semi': ['error', 'always']
  },
  'globals': {
    'expectObservable': true,
    'hot': true,
    'cold': true,
    '__DEV__': false,
    'DEVELOPMENT_MODE': true
  },
  'env': {
    'browser': true,
    'node': true,
    'es6': true
  },
  'parserOptions': {
    'sourceType': 'module',
    'ecmaFeatures': {
      'modules': true,
      'experimentalObjectRestSpread': true,
      'jsx': true
    }
  }
};
