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
    }, {
      test: /\.css$/,
      loaders: ['style', 'css'],
    }, {
      test: /\.html$/,
      loaders: ['html'],
    },

    /**
     *  Don't know what's going on here...
     *  Look this up later!
     *
     */

    {
      test: /\.png$/,
      loader: 'url-loader?prefix=img/&limit=5000',
    }, {
      test: /\.jpg$/,
      loader: 'url-loader?prefix=img/&limit=5000',
    }, {
      test: /\.gif$/,
      loader: 'url-loader?prefix=img/&limit=5000',
    }, {
      test: /\.woff$/,
      loader: 'url-loader?prefix=font/&limit=5000',
    }, {
      test: /\.eot$/,
      loader: 'file-loader?prefix=font/',
    }, {
      test: /\.ttf$/,
      loader: 'file-loader?prefix=font/',
    }, {
      test: /\.svg$/,
      loader: 'file-loader?prefix=font/',
    }],
  },
  devServer: {
    contentBase: `${__dirname}/public`,
  },
};
