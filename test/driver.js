var webdriver =require('selenium-webdriver'),
  driver;

var getDriver = function() {
  if(driver) {
    return driver;
  } else {
    driver = new webdriver.Builder().
      withCapabilities(webdriver.Capabilities.chrome()).
      build();
    return driver;
  }
};

module.exports.getDriver = getDriver;
