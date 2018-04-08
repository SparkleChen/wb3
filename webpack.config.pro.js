const path = require('path');
const webpack = require('webpack');
const pak = require('./package');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: {
        app:'./app/index.js',
        vendor:Object.keys(pak.dependencies)
    },
    output: {
        path: path.resolve(__dirname + '/dist'),
        filename: '[name].[chunkhash:8].bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader',
                    options: {
                        presets: ['babel-preset-env','babel-preset-react','babel-preset-stage-0']
                }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'
                })
            }
        ]
    },
    plugins:[
       new webpack.optimize.CommonsChunkPlugin({
          name:'vendor',
          filename:'[name].[chunkhash:8].bundle.js'
       }),
       new ExtractTextPlugin('css/[name].css'),

       new HtmlWebpackPlugin({
            template:'app/template.html'
        })
    ]
};