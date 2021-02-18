const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://www.sahibinden.com/',
      browser: 'chrome',
      windowSize: 'maximize',
      host: '127.0.0.1',
      port: 4444,
      restart: false,
    desiredCapabilities: {
        chromeOptions: {
          args: [ /*"--headless",*/ "--disable-gpu", "--no-sandbox" ]
        },
        firefoxOptions: {
          args: [ /*"--headless",*/ "--disable-gpu", "--no-sandbox" ]
        } 
    }
  }
  },
  multiple: {
    basic: {
      browsers: ["chrome", "firefox"]
    }
   },
  include: {
    "I": "./tests/steps_file.js",
    "basePage": "./pages/base.js"
  },
  bootstrap: null,
  mocha: {},
  name: 'ProjectWorks',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    wdio:{
      enabled: true,
      services: ['selenium-standalone']
    },
 /*   selenoid: {
      enabled: true,
      deletePassed: true,
      autoCreate: true,
      autoStart: true,
      sessionTimeout: '30m',
      enableVideo: true,
      enableLog: true,
    }*/
   
  }
}