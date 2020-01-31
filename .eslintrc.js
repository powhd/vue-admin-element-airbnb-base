const path = require('path');

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  plugins: [
    'vue',
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            alias: {
              '@': path.join(__dirname, 'src'),
            },
            extensions: ['.js', '.vue', '.json'],
          }
        }
      }
    }
  },
  rules: {
  },
};
