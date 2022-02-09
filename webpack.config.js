const path = require('path');
const webpack = require("webpack");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageminWebpWebpackPlugin= require("imagemin-webp-webpack-plugin");

module.exports = {
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js',
    },
    devServer: {
        compress: true,
        historyApiFallback: true,
        open: true,
        static: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ],
            },
            {
                test: /\.(png|webp|jpg|gif)$/i,
                use: {
                    loader: "url-loader",
                    options: {
                    limit: 8192,
                    name: "static/media/[name].[hash:8].[ext]"
                    }
                }
            },
            {
                test: /\.svg$/,
                use: ["@svgr/webpack"]
            },
            {
                test: /\.(eot|pdf|otf|ttf|woff|woff2)$/,
                loader: require.resolve("file-loader"),
                options: {
                name: "static/media/[name].[hash:8].[ext]"
                }
            }
        ]
    },
    resolve: {
        fallback: {
          module: "empty",
          dgram: "empty",
          dns: "mock",
          fs: "empty",
          http2: "empty",
          net: "empty",
          tls: "empty",
          child_process: "empty",
          process: require.resolve("process/browser"),
          zlib: require.resolve("browserify-zlib"),
          stream: require.resolve("stream-browserify"),
          util: require.resolve("util"),
          buffer: require.resolve("buffer"),
          asset: require.resolve("assert"),
        },
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new webpack.ProvidePlugin({
            Buffer: ["buffer", "Buffer"],
            process: "process/browser",
          }),
        new ImageminWebpWebpackPlugin()
    ],
    
};