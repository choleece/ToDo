/**
 * Created by choleece on 2017/8/9.
 */
var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './app/index.js'),
    devtool: 'cheap-module-eval-source-map',
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, 'dist'),
        publicPath: "/"
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true,
        openPage: '/dist/index.html',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(jsx|js)?$/,
                use: [
                    'babel-loader'
                ],
                include: [
                    path.resolve(__dirname, 'app')
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ]
            }
        ]
    }
}