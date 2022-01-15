const path = require('path');

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
};
