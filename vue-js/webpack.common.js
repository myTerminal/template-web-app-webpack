/* global require module __dirname */

const sourceDir = 'src/client';
const outputDir = 'public';

const path = require('path');

const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const clean = new CleanWebpackPlugin([outputDir]);
const copy = new CopyWebpackPlugin([
    {
        from: sourceDir + '/data',
        to: 'data',
        toType: 'dir'
    },
    {
        from: sourceDir + '/favicon.ico'
    },
    {
        from: sourceDir + '/manifest.json'
    },
    {
        from: sourceDir + '/icons',
        to: 'icons'
    }
]);
const extractCSS = new ExtractTextPlugin('styles/styles.css');
const vueLoaderPlugin = new VueLoaderPlugin();
const html = new HtmlWebpackPlugin({
    template: sourceDir + '/index.html',
    filename: 'index.html',
    chunks: ['main']
});

module.exports = {
    mode: 'development',
    entry: {
        main: './' + sourceDir + '/scripts/main.js'
    },
    module: {
        rules: [
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/[name].[ext]',
                            publicPath: '../'
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]',
                            publicPath: '../'
                        }
                    }
                ]
            },
            {
                test: /\.(less|css)$/,
                use: extractCSS.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true
                            }
                        },
                        {
                            loader: 'less-loader'
                        }
                    ]
                })
            },
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader'
                    }
                ]
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'eslint-loader'
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /.html$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        clean,
        copy,
        extractCSS,
        vueLoaderPlugin,
        html
    ],
    output: {
        filename: 'scripts/[name].js',
        path: path.resolve(__dirname, outputDir),
        publicPath: ''
    }
};
