var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          failOnError: true,
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'static/[name].[hash].[ext]',
            }
          }
        ]
      }
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'src')
  },
  plugins: [new HtmlWebpackPlugin()]
};
