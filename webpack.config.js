const webpack = require('webpack');
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");

module.exports = {
  entry: "./src/main.js",
  
  output: {
    filename: "bundle.js",
    path: path.resolve("dist")
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'img/'
          }
        }
      }     
    ]
  },

  devServer: {
    contentBase: [path.join(__dirname, './dist')],
    clientLogLevel: 'none',
    hot: true
  },

  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

  watchOptions: {
    ignored: "node_modules"
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].bundle.css"
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
            autoprefixer()
        ]
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};