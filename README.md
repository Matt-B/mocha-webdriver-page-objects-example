# mocha-webdriver-page-objects-example

![build status](https://travis-ci.org/Matt-B/mocha-webdriver-page-objects-example.svg?branch=master)

A stab at using page objects with mocha and webdriverjs.

This is a first go at trying to apply the [page object model](https://code.google.com/p/selenium/wiki/PageObjects) pattern to functional tests using [mocha](http://mochajs.org) and the [webdriver js bindings](https://code.google.com/p/selenium/wiki/WebDriverJs). I wrote this out because I couldn't find any other examples elsewhere. Feel free to submit a pull request if you spot anything that could be done better.

## Get started

You'll need to have the Chromedriver on your path. Grab it from [here](http://chromedriver.storage.googleapis.com/index.html), and then make sure the location it is in is added to your PATH environment variable. To test it is setup correctly, try typing in a terminal:

    chromedriver

If you get a message saying 'Starting Chromedriver' then you're good to go.

Next, clone the repo, and then install dependencies:

    npm install

Then run the tests:

    node_modules/mocha/bin/mocha
