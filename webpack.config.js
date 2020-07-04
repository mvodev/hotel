const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

const cssLoaders = extra => {
 const loaders = [{
  loader: MiniCssExtractPlugin.loader,
  options: {},
 }, 'css-loader'];

 if (extra) {
  loaders.push(extra);
 }

 return loaders;
}

module.exports = {
 context: path.resolve(__dirname, 'src'),
 mode: 'development',
 entry: {
  main: './index.js'
 },
 output: {
  filename: '[name].[contenthash].js',
  path: path.resolve(__dirname, 'dist')
 },
 optimization: {
  splitChunks: {
   chunks: 'all'
  }
 },
 devtool: 'source-map',
 plugins: [
  new HTMLWebpackPlugin(
   {
    template: './index.pug'
   }
  ),
  new CleanWebpackPlugin(),
  new webpack.ProvidePlugin({
   $: 'jquery',
   jQuery: 'jquery'
  }),
  new MiniCssExtractPlugin({
   filename: '[name].[hash].css'
  }),
  new CopyWebpackPlugin({
   patterns: [
    {
     from: path.resolve(__dirname, 'src/assets/img/svg'),
     to: path.resolve(__dirname, 'dist')
    },
    {
     from: path.resolve(__dirname, 'dist'),
     to: path.resolve(__dirname, 'docs')
    }
   ]
  })
 ],
 module: {
  rules: [
   {
    test: /\.css$/,
    use: cssLoaders()
   },
   {
    test: /\.pug$/,
    use: ["pug-loader"],
   },
   {
    test: /\.(png|jpg|svg|gif)$/,
    use: ['file-loader']
   },
   {
    test: /\.(ttf|woff|woff2|eot)$/,
    use: ['file-loader']
   },
   {
    test: /\.s[ac]ss$/,
    use: cssLoaders('sass-loader')
   }
  ]
 }
};