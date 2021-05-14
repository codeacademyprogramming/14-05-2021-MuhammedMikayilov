const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.[contenthash].js',
        clean: true,
    },
    plugins: [new HtmlWebpackPlugin({
        template: './public/index.html'
    })],
    module: {
        rules: [
          {
            test: /\.scss$/i,
            use: [
              "style-loader",
              "css-loader",
              "sass-loader",
            ],
          },
          {
            test: /\.html$/i,
            loader: 'html-loader',
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            type: 'asset/resource',
            generator: {
                filename: "img/[name].[hash].[ext]"
            }
          },
          
        ],
      },
}; 