
var to5Options = require('./.babelrc');

module.exports = function(config) {

  config.set({
    frameworks: ['mocha', 'chai', 'jspm'],

    files: ['node_modules/babel-core/browser-polyfill.js'],

    preprocessors: {
      'src/**/*.js': ['babel']
    },
    browsers: ['PhantomJS'],

    ////

    babelPreprocessor: {
      options: to5Options
    },

    jspm: {
      config: 'jspm.packages.js',
      serveFiles: ['src/**/!(*.spec).js'],
      loadFiles: ['src/**/*.spec.js']
    }

  });
};
