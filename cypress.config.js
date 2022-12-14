const { defineConfig } = require('cypress')

module.exports = defineConfig({
  experimentalStudio: true,
  e2e: {
	experimentalStudio: true,
 	testIsolation: false,
	reporter: 'cypress-mochawesome-reporter',
	 "reporterOptions": {
   	 "reportDir": "cypress/reports",
   	 "charts": true,
    	"reportPageTitle": "My Test Suite",
    	"embeddedScreenshots": true,
    	"inlineAssets": true
  	},
  	"video": false,
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
})
