
var to5Options = require('./.6to5rc');

module.exports = function(config) {

  config.set({
    frameworks: ['mocha', 'chai', 'jspm'],

    files: ['node_modules/6to5/browser-polyfill.js'],

    preprocessors: {
      'src/**/*.js': ['6to5']
    },
    browsers: ['PhantomJS'],

    ////

    '6to5Preprocessor': {
      options: to5Options
    },

    jspm: {
      config: 'jspm.packages.js',
      serveFiles: ['src/**/!(*.spec).js'],
      loadFiles: ['src/**/*.spec.js']
    }

  });
};
