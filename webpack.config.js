
/* eslint-disable */
const webpack = require('webpack');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    devtool: 'nosources-source-map',
    entry: './src/index.js',
    output: {
        filename: 'dist/react-toasts.js',
        libraryTarget: 'umd',
        library: 'react-toasts'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'react-app'],
                    sourceMap: true
                }
            },
            {
                test: /\.css/,
                exclude: /node_modules/,
                loader: 'css-loader'
            }
        ]
    },
    externals: [
        'react',
        'react-dom',
        'prop-types',
        'react-transition-group'
    ],
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: isDev
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ]
};