const path = require('path');
const CopyWebpackPlugin = require("copy-webpack-plugin");

const copyWebpackPlugin = new CopyWebpackPlugin({
  patterns: [{ from: 'src/*.elm', to: 'dist/[name][ext]' }],
});

module.exports = {
  entry: path.resolve(__dirname, 'src'),
  output: {
    path: __dirname,
    filename: 'dist/index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [copyWebpackPlugin],
};
