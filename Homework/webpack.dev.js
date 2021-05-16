const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.config');


module.exports = merge(common, {
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: false,
        port: 4030,
      },
}); 