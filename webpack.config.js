const path = require('path')
// import path from 'path'

const rules = [
  {
    test: /\.tsx?/,
    exclude: /node_modules/,
    loader: 'babel-loader'
  },
  {
    test: /\.css$/,
    use: [
      {loader: 'style-loader'},
      {
        loader: 'css-loader',
        options: {
          modules: false // module uglify
        }
      }
    ]
  }
]

module.exports = {
  target: 'web',
  mode: 'development',
  entry: ['@babel/polyfill', './src/index.tsx'],
  output: {
    path: path.resolve(__dirname, 'build'), // create folder input  bundle.js
    filename: 'bundle.js'
  },
  module: {rules: rules},
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  devServer: {
    contentBase: './',
    port: 5000
  }
}
