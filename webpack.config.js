/* global __dirname */

var path = require('path');

var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var js_src = path.resolve(__dirname, 'js');
var html_src = path.resolve(__dirname, 'html');
var less_src = path.resolve(__dirname, 'less');
var dir_build = path.resolve(__dirname, 'build');

module.exports = {
    entry: path.join(js_src, 'main.js'),
    output: {
        path: path.resolve(dir_build),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: dir_build,
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: js_src,
            }
        ]
    },
    plugins: [
        // Simply copies the files over
        new CopyWebpackPlugin([
            { from: html_src } // to: output.path
        ]),
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map',
};
