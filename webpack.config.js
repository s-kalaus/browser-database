const path = require('path');

module.exports = {
  entry: './src/browser-database.ts',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js' ]
  },
  output: {
    filename: 'browser-database.js',
    path: path.resolve(__dirname, 'dist')
  }
};
