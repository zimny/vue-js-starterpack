var webpackConfig = require('./build/webpack.dev.js');
webpackConfig.entry = {};

module.exports = function(config) {
  config.set({

    files: ['tests/index.js'],

    frameworks: [
      'jasmine'
    ],

    preprocessors: {
      'tests/index.js': ['webpack'],
      'tests/*_test.js': ['webpack'],
      'tests/**/*_test.js': ['webpack']
    },

    reporters: ['progress'],

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true,
      stats: {
        chunks: false
      }
    },

    plugins: [
      require("karma-webpack"),
      require("karma-phantomjs-launcher"),
      require("karma-jasmine")
    ]

  });
};
