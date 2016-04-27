var page = require('./page');

function GoogleResultsPage (webdriver) {
  page.call(this, webdriver, 'http://www.google.com/?q=');
}

GoogleResultsPage.prototype = Object.create(page.prototype);
GoogleResultsPage.prototype.constructor = GoogleResultsPage;

GoogleResultsPage.prototype.getDisplayedResults = function() {
  return this.driver.findElements({ css: 'div.g' });
};

module.exports = GoogleResultsPage;
