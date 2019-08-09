const path = require('path')
// import path from 'path'

const rules = [
    {
        test: /\.tsx?/, // add css
        exclude: /node_modules/,
        loader: 'babel-loader'
    }
]

module.exports = {
    target: 'web',
    mode: 'development',
    entry: './src/index.tsx',
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