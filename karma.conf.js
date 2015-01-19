module.exports = function(config) {

  var to5Options = require('./.6to5rc');

  config.set({
    frameworks: ['jasmine', 'jspm'],
    preprocessors: {
      'src/**/*.js': ['6to5']
    },
    reporters: ['progress'],
    browsers: ['Chrome'],

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
