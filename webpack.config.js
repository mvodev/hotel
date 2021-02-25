const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

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
  main: './index.js',
  UIKit: './UIKit.js',
  landing: './landing.js',
  details: './details.js',
  signin: './signin.js',
  search: './search.js',
  registration: './registration.js',

 },
 output: {
  filename: '[name].[contenthash].js',
  path: path.resolve(__dirname, 'docs')
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
    template: './index.pug',
    chunks: ['main'],
   }
  ),
  new HTMLWebpackPlugin(
   {
    template: './components/UIKit/UIKit.pug',
    filename: 'UIKit.html',
    chunks: ['UIKit'],
   }
  ),
  new HTMLWebpackPlugin(
   {
    template: './components/Website/landing.pug',
    chunks: ['landing'],
    filename: 'landing.html'
   }
  ),
  // new HTMLWebpackPlugin(
  //  {
  //   template: './components/Website/details.pug',
  //   chunks: ['details'],
  //   filename: 'details.html',
  //  }
  // ),
  // new HTMLWebpackPlugin(
  //  {
  //   template: './components/Website/search.pug',
  //   chunks: ['search'],
  //   filename: 'search.html'
  //  }
  // ),
  // new HTMLWebpackPlugin(
  //  {
  //   template: './components/Website/registration.pug',
  //   chunks: ['registration'],
  //   filename: 'registration.html'
  //  }
  // ),
  // new HTMLWebpackPlugin(
  //  {
  //   template: './components/Website/sign-in-page.pug',
  //   chunks: ['signin'],
  //   filename: 'sign-in.html'
  //  }
  // ),
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
     to: path.resolve(__dirname, 'docs')
    },
    {
     from: path.resolve(__dirname, 'src/assets/img/jpg'),
     to: path.resolve(__dirname, 'docs')
    },
    {
     from: path.resolve(__dirname, 'src/assets/img/png'),
     to: path.resolve(__dirname, 'docs')
    },
    {
     from: path.resolve(__dirname, 'src/assets/favicons'),
     to: path.resolve(__dirname, 'docs/favicons')
    },
   ]
  }),
  new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })
 ],
 module: {
  rules: [
   {
    test: /\.css$/,
    use: cssLoaders()
   },
   {
    test: /\.json$/,
    use: ['json-loader'],
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
    test: /\.(ttf|woff|woff2|eot|otf)$/,
    use: ['file-loader']
   },
   {
    test: /\.s[ac]ss$/,
    use: cssLoaders('sass-loader')
   }
  ]
 }
};