const path = require('path');

module.exports = {
  entry: {
    index: './src/index.ts',
    'browser-database': './src/browser-database.ts'
  },
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
    extensions: ['.ts', '.js']
  },
  output: {
    library: 'browser-database',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist')
  }
};
