var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var webpack = require('webpack');
module.exports = {
  'entry': './src/CreateWidget.ts',
  'output': {
    'path': path.join( __dirname, 'dist' ),
    'filename': 'health-miner-widget.js',
    'libraryTarget': 'umd',
    'library': 'HealthMiner'
  },
  optimization: {
        // We no not want to minimize our code.
        minimize: false
    },
  'devtool': "source-map",
  'module': {
    'rules': [
      {
        test: /\.scss$/,
        use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      // ts-loader: convert typescript (es6) to javascript (es6),
      // babel-loader: converts javascript (es6) to javascript (es5)
      {
        'test': /\.tsx?$/,
        'loaders': ['babel-loader','ts-loader'],
        'exclude': [/node_modules/,nodeModulesPath]
      },
      // babel-loader for pure javascript (es6) => javascript (es5)
      {
        'test': /\.(jsx?)$/,
        'loaders': ['babel'],
        'exclude': [/node_modules/,nodeModulesPath]
      }
    ]
  },
  'plugins': [],
      resolve: {
        extensions: [ '.ts', '.tsx', '.js' ]
    }
};
