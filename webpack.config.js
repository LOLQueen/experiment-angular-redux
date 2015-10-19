function inProduction() {
  return process.env.NODE_ENV === 'production';
}

function getEntrySources(sources) {
  return !inProduction()
    ? sources.concat(
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server'
      )
    : sources;
}

module.exports = {
  entry: {
    bundle: getEntrySources([
      `${__dirname}/source/index.js`,
    ]),
  },
  output: {
    path: `${__dirname}/public`,
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: 'source-map-loader',
    }],
    loaders: [{
      test: /\.js$/,
      loaders: ['ng-annotate', 'babel-loader?stage=0', 'eslint-loader'],
      exclude: /node_modules/,
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass'],
    }],
  },
  devServer: {
    contentBase: `${__dirname}/public`,
  },
};
