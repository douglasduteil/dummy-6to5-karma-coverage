module.exports = function(config) {
  function normalizationBrowserName(browser) {
      return browser.toLowerCase().split(/[ /-]/)[0];
  }

  var to5Options = require('./.6to5rc');

  config.set({
    frameworks: ['mocha', 'chai', 'jspm'],
    files: ['node_modules/6to5/browser-polyfill.js'],
    preprocessors: {
      'src/**/*.spec.js': ['6to5'],
      'src/**/!(*.spec).js': ['coverage']
    },
    reporters: ['progress', 'coverage'],
    browsers: ['PhantomJS'],

    ////

    '6to5Preprocessor': {
      options: to5Options
    },

    jspm: {
      config: 'jspm.packages.js',
      serveFiles: [
        'src/**/!(*.spec).js'
      ],
      loadFiles: ['src/**/*.spec.js']
    },

    coverageReporter: {
      // configure the reporter to use isparta for JavaScript coverage
      instrumenters: { isparta : require('isparta') },
      instrumenter: {
        '**/*.js': 'isparta'
      },

      instrumenterOptions: {
        isparta: { to5 : to5Options }
      },

      reporters: [
        {
          type: 'text',
          subdir: normalizationBrowserName
        },
        {
          type: 'html',
          dir: 'coverage/',
          subdir: normalizationBrowserName
        }
      ]
    }

  });
};
