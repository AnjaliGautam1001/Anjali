exports.config = {

    framework: 'jasmine',
    directConnect: true,
  
    //specs: ['newcollab.js'],
    specs: ['spec.js'],
  
    capabilities: {
      'browserName': 'chrome',
     /* chromeOptions: {
        args: ['--headless', '--disable-gpu', '--no-sandbox', '--window-size=1920x1200']
      },*/
  
    },
    
onPrepare: function () {
    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }));
  },
  onPrepare: function () {
    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter());
    jasmine.getEnv().afterEach(function (done) {
      browser.takeScreenshot().then(function (png) {
        allure.createAttachment('Screenshot', function () {
          return new Buffer(png, 'base64')
        }, 'image/png')();
        done();
      })
    });
  }
  
}