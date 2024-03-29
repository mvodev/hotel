const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const { getAvailabelPort } = require('./config/utils.js');

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

module.exports = async (_env, argv) => {
  const isProd = argv.mode === 'production';
  const port = await getAvailabelPort();
  return {
    context: path.resolve(__dirname, 'src'),
    mode: isProd ? 'production' : 'development',
    entry: {
      main: './index.js',
      UIKit: './pages/ui-kit-page/ui-kit.js',
      landing: './pages/landing/landing.js',
      details: './pages/details/details.js',
      signin: './pages/sign-in-page/sign-in-page.js',
      search: './pages/search/search.js',
      registration: './pages/registration/registration.js',
    },
    output: {
      filename: './js/[name].[contenthash].js',
      path: path.resolve(__dirname, 'docs')
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@node': path.resolve(__dirname, 'node_modules'),
      },
      extensions: ['.js'],
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    devtool: isProd ? false : 'source-map',
    devServer: {
      port: port,
    },
    plugins: [
      new HTMLWebpackPlugin(
        {
          template: './index.pug',
          chunks: ['main'],
        }
      ),
      new HTMLWebpackPlugin(
        {
          template: './pages/ui-kit-page/ui-kit.pug',
          filename: 'UIKit.html',
          chunks: ['UIKit'],
        }
      ),
      new HTMLWebpackPlugin(
        {
          template: './pages/landing/landing.pug',
          chunks: ['landing'],
          filename: 'landing.html',
        }
      ),
      new HTMLWebpackPlugin(
        {
          template: './pages/details/details.pug',
          chunks: ['details'],
          filename: 'details.html',
        }
      ),
      new HTMLWebpackPlugin(
        {
          template: './pages/search/search.pug',
          chunks: ['search'],
          filename: 'search.html'
        }
      ),
      new HTMLWebpackPlugin(
        {
          template: './pages/registration/registration.pug',
          chunks: ['registration'],
          filename: 'registration.html'
        }
      ),
      new HTMLWebpackPlugin(
        {
          template: './pages/sign-in-page/sign-in-page.pug',
          chunks: ['signin'],
          filename: 'sign-in-page.html'
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
            from: path.resolve(__dirname, 'src/assets/favicons'),
            to: path.resolve(__dirname, 'docs/favicons')
          },
        ]
      }),
      new ImageminPlugin({
        test: /\.(jpe?g|png|gif|svg)$/i,
        pngquant: {
          quality: '95-100'
        }
      })
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: cssLoaders()
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.pug$/,
          use: ["pug-loader"],
        },
        {
          test: /\.(png|jpeg|jpg|gif|webp|svg)$/,
          loader: 'file-loader',
          options: {
            emitFile: true,
            esModule: false,
            name: 'images/[name].[contenthash].[ext]',
          },
        },
        {
          test: /\.(ttf|woff|woff2|eot|otf)$/,
          loader: 'file-loader',
          options: {
            emitFile: true,
            esModule: false,
            name: 'fonts/[name].[contenthash].[ext]',
          },
        },
        {
          test: /\.s[ac]ss$/,
          use: cssLoaders('sass-loader')
        },
      ]
    },
  }
};