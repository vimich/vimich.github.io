const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const path = require('path');

const publicPath = path.resolve(__dirname, '../public');

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${publicPath}/index.html`,
            favicon: `${publicPath}/favicon.png`
        }),
        new Dotenv({ path: path.resolve(__dirname, '../.env') }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './web.config'),
                    to: path.resolve(__dirname, '../dist')
                }
            ]
        })
    ]
};

module.exports = merge(commonConfig, prodConfig);
