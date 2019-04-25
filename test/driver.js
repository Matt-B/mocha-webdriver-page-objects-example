var {Builder, By, until} = require('selenium-webdriver');
var driver;

var getDriver = function() {
  if(driver) {
    return driver;
  } else {
    driver = buildDriver();
    return driver;
  }
};

var buildDriver = function() {
  switch(process.env.PLATFORM) {
    case 'FIREFOX':
      return new Builder().forBrowser("firefox").build();
    default:
      return new Builder().forBrowser("chrome").build();
  }
};

module.exports.getDriver = getDriver;
