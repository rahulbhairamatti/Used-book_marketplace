// Karma configuration file, see link for more information
     // https://karma-runner.github.io/1.0/config/configuration-file.html

     module.exports = function (config) {
        config.set({
          basePath: '',
          frameworks: ['jasmine', '@angular-devkit/build-angular'],
          plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage'),
            require('@angular-devkit/build-angular/plugins/karma')
          ],
          client: {
            jasmine: {
              // Jasmine options here
              // you can add configuration options for Jasmine here
              // the possible options are listed at https://jasmine.github.io/api/jasmine.Configuration.html
              // for example, you can disable randomized test execution if you prefer
              // random: false
              },
            clearContext: false // leave Jasmine Spec Runner output visible in browser
          },
          jasmineHtmlReporter: {
            suppressAll: true // removes the duplicated traces
          },
          coverageReporter: {
            dir: require('path').join(__dirname, './coverage/marketplace-frontend'), // Adjust 'marketplace-frontend' if your project name is different
            subdir: '.',
            reporters: [
              { type: 'html' },
              { type: 'text-summary' }
            ]
          },
          reporters: ['progress', 'kjhtml'],
          port: 9876,
          colors: true,
          logLevel: config.LOG_INFO,
          autoWatch: true,
          browsers: ['Chrome'],
          singleRun: false,
          restartOnFileChange: true
        });
      };