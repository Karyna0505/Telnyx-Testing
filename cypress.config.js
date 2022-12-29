const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 720,
  viewportWidth: 1280,
  
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    baseUrl: 'https://telnyx.com/',
   
    screenshotOnRunFailure: true,

    screenshotsFolder: 'cypress/screenshotsFolder',

    chromeWebSecurity: false,
    
    blockHosts: [ "google-analytics.com", "googletagmanager.com", "accounts.google.com"],
    
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/results",
      overwrite: false,
      html: false,
      json: true
   }
    
  },

});
