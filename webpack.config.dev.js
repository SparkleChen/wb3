const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: path.resolve(__dirname +'/app/index.js' ),
    output: {
        path: path.resolve(__dirname + '/dist'),
        filename: '[name].[hash:8].bundle.js'
    },
    devServer: {
        hot: true,
        inline: true,
        progress:true,
        contentBase: path.join(__dirname, "app"),
        host:'localhost',
        port:'8090'
    },
    module:{
        loaders:[
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {presets: ['es2015', 'react','stage-0']}
            },
            {
                test: /\.css$/,loader: ('style-loader!css-loader'),
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'app/template.html'
		})
	],
    resolve: {
        extensions: ['.css', '.js', '.jsx'],
    }
};