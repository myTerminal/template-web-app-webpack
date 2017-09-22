/* global require module __dirname */

const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const clean = new CleanWebpackPlugin(['public']);
const copy = new CopyWebpackPlugin([
    {
        from: 'src/client/data',
        to: 'data',
        toType: 'dir'
    },
    {
        from: 'node_modules/bootstrap/dist/css/bootstrap.min.css',
        to: 'styles/vendor/bootstrap/css/'
    },
    {
        from: 'node_modules/bootstrap/dist/fonts',
        to: 'styles/vendor/bootstrap/fonts/',
        toType: 'dir'
    },
    {
        from: 'src/client/favicon.ico'
    }
]);
const extractCSS = new ExtractTextPlugin('styles/styles.css');
const html = new HtmlWebpackPlugin({
    template: 'src/client/index.html'
});

module.exports = {
    entry: {
        app: './src/client/scripts/app.js'
    },
    module: {
        rules: [
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader?name=fonts/[name].[ext]'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader?name=images/[name].[ext]'
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
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'babel-preset-es2015'
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
        path: path.resolve(__dirname, 'public'),
        publicPath: '/'
    }
};
