var webdriver =require('selenium-webdriver'),
  driver;

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
      return new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.firefox()).
        build();
    default:
      return new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();
  }
};

module.exports.getDriver = getDriver;
