const path = require('path');
const GasPlugin = require("gas-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: {
    idnex: ['babel-polyfill', './src/index.ts']
  },
  devtool: false,
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["babel-loader", "ts-loader"],
        // exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [
      '.js', '.ts'
    ]
  },
  plugins: [
    new GasPlugin()
  ]
};
