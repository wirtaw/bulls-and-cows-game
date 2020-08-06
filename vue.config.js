const BrotliPlugin = require('brotli-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const zopfli = require('@gfx/zopfli');

let plugins = [];
let performance =
  process.env.NODE_ENV === "production"
    ? false
    : {
      hints: false
    };
if (process.env.NODE_ENV === "production") {
  const compressionTest = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
  plugins = [
    new CompressionWebpackPlugin({
      algorithm(input, compressionOptions, callback) {
        return zopfli.gzip(input, compressionOptions, callback);
      },
      compressionOptions: {
        numiterations: 15,
        level: 11
      },
      threshold: 10240,
      minRatio: 0.99,
      test: compressionTest
    }),
    new BrotliPlugin({
      test: compressionTest,
      minRatio: 0.99
    })
  ];
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/bulls_vue'
    : '/',
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: `Poplauki | 'Bulls and Cows' game - simple game to spell number`,
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
  },
  devServer: {
    proxy: 'https://poplauki.eu/bulls_vue',
  },
  configureWebpack: {
    performance,
    plugins,
    devtool: process.env.NODE_ENV !== "production" ? "inline-source-map" : false
  }
}
