module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      // https://babeljs.io/docs/en/babel-plugin-proposal-class-properties
      require('@babel/plugin-proposal-class-properties').default,
      {
        loose: true
      }
    ],
    [require('@babel/plugin-proposal-decorators').default, false]
  ]
}
