var test = require('selenium-webdriver/testing'),
  expect = require('chai').expect,
  GoogleSearchPage = require('./page-objects/google-search-page'),
  GoogleResultsPage = require('./page-objects/google-results-page');

test.describe('Google Search', function() {

  var driver;
  
  this.timeout(15000);

  test.before(function() {
    driver = require('./driver').getDriver();
  });
  
  test.after(function() {
    if(driver)
      driver.quit();
  }); 

  test.it('should display results when searching for dinosaurs', function() {
    var googleSearchPage = new GoogleSearchPage(driver);
    googleSearchPage.open();
    googleSearchPage.typeSearchQuery('dinosaurs');
    var googleResultsPage = googleSearchPage.clickSearchButton();
    googleResultsPage.getDisplayedResults().then(function(numberOfResults) {
      expect(numberOfResults.length).to.be.above(0);
    });
  });

});
