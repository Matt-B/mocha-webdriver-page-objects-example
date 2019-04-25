const {until} = require('selenium-webdriver');

function Page(webdriver, url) {
  this.driver = webdriver;
  this.url = url;
};

Page.prototype.open = function() {
  this.driver.get(this.url);
  return this;
};

Page.prototype.waitFor = function(locator, timeout) {
  var waitTimeout = timeout || 20000;
  var driver = this.driver;
  return driver.wait(until.elementLocated(locator, waitTimeout));
};

module.exports = Page;
