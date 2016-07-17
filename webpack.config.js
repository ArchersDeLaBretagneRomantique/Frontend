const webpack = require('webpack')
const path = require('path')

const prod = process.env.NODE_ENV === 'production'

function getEntries(entries) {
  if (!prod) {
    entries.push('webpack-dev-server/client?http://localhost:3000')
    entries.push('webpack/hot/only-dev-server')
  }
  return entries
}

function getJsLoaders(loaders) {
  if (!prod) {
    loaders.push('react-hot')
  }
  loaders.push('babel')
  return loaders
}

function getPlugins(plugins) {
  if (prod) {
    plugins.push(new webpack.optimize.DedupePlugin())
    plugins.push(new webpack.optimize.UglifyJsPlugin())
  } else {
    plugins.push(new webpack.HotModuleReplacementPlugin())
    plugins.push(new webpack.NoErrorsPlugin())
  }
  return plugins
}

module.exports = {
  devtool: prod ? 'source-map' : 'eval',
  entry: getEntries([
    path.join(__dirname, 'app/index'),
  ]),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    root: [
      path.join(__dirname, 'app'),
    ],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'app'),
        loaders: getJsLoaders([]),
      },
      {
        test: /\.s?css$/,
        loaders: [
          'style',
          'css?modules&localIdentName=[path]_[local]__[hash:base64:5]',
          'sass',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ['file'],
      },
    ],
  },
  plugins: getPlugins([
    new webpack.optimize.OccurenceOrderPlugin(),
  ]),
}
