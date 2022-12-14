/// <reference types="cypress" />

const reporter = require("cypress-mochawesome-reporter/plugin");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
};
module.exports = (on, config) => {
  require('cypress-mochawesome-reporter/plugin')(on);
};