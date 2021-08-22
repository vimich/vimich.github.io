'use strict';

const path = require('path');

const webpack = require('webpack');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const commonConfig = require('./webpack.common');

const publicPath = path.resolve(__dirname, '../public');
const sourcePath = path.resolve(__dirname, '../src');

const devConfig = {
    mode: 'development',
    entry: [`${sourcePath}/index`],
    output: {
        publicPath: 'http://localhost:8080/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '<title>',
            template: `${publicPath}/index.html`,
            filename: 'index.html',
            favicon: `${publicPath}/favicon.png`
        }),
        new Dotenv({ path: path.resolve(__dirname, '../.env') }),
        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        historyApiFallback: true,
        port: 8080,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        proxy: {
            '/api': {
                target: 'https://localhost:5001', // define local backend proxy
                secure: false
            }
        }
    }
};

module.exports = merge(commonConfig, devConfig);
