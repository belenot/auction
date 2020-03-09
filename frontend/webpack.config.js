const path = require('path');

module.exports = {
  mode: 'development',
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        exclude: [/node_modules/],
        loader: 'ts-loader'
      },
      {
        test: /\.css$/,
        // commented for loading bootstrap
        // exclude: [/node_modules/], 
        loader: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css']
  },
  devtool: 'source-map'
}