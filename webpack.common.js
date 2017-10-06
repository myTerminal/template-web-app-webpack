/* global require module __dirname */

const sourceDir = 'src/client';
const outputDir = 'public';

const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin');
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
    }
]);
const extractCSS = new ExtractTextPlugin('styles/styles.css');
const html = new HtmlWebpackPlugin({
    template: sourceDir + '/index.html'
});

module.exports = {
    entry: {
        app: './' + sourceDir + '/scripts/app.jsx'
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
                test: /\.js$/,
                enforce: "pre",
                exclude: /node_modules/,
                use: [
                    {
                        loader: "jsxhint-loader"
                    }
                ]
            },
            {
                test: /\.jsx$/,
                enforce: "pre",
                exclude: /node_modules/,
                use: [
                    {
                        loader: "jsxhint-loader"
                    }
                ]
            },
            {
                test: /\.js$/,
                enforce: "pre",
                exclude: /node_modules/,
                use: [
                    {
                        loader: "jscs-loader"
                    }
                ]
            },
            {
                test: /\.jsx$/,
                enforce: "pre",
                exclude: /node_modules/,
                use: [
                    {
                        loader: "jscs-loader"
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'babel-preset-env'
                        ]
                    }
                }
            },
            {
                test: /\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'babel-preset-env',
                            'babel-preset-react'
                        ]
                    }
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
        html
    ],
    output: {
        filename: 'scripts/[name].js',
        path: path.resolve(__dirname, outputDir),
        publicPath: '/'
    }
};
