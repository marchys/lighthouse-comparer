module.exports = {
  use: [
    [
      '@neutrinojs/airbnb',
      {
        eslint: {
          rules: {
            'arrow-parens': 'off',
            'function-paren-newline': 'off',
          },
        },
      },
    ],
    [
      '@neutrinojs/react',
      {
        html: {
          title: 'react-lighthouse-comparer',
        },
      },
    ],
    [
      '@neutrinojs/jest',
      {
        testRegex: void 0,
        testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)(spec|test).js?(x)'],
      },
    ],
  ],
};
