module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    jest: true,
    browser: true,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            modules: ['node_modules', 'src'],
            extensions: ['.js', '.json', '.jsx'],
          },
        },
      },
    },
  },
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'react/jsx-filename-extension': [2, { extensions: ['.js'] }],
    'import/prefer-default-export': 'off',
    'import/core-modules': ['prop-types'],
  },
};
