# Outdoorsy
The project is built with https://cypress.io, mocha and chai and is using https://www.npmjs.com/package/cypress-mochawesome-reporter as HTML reporter.
I used Cypress v12.01 so recommend to use this version to run the tests

The tests can be found under e2e folder. Paje objects can be found under support folder in POM folder.

The HTML report can be found in the project's folder under reports > index.html.

Steps to run tests:

Download and unzip the cypress.zip
Paste the files in their respective places
Run the test files using npm run cypress:run in headless mode or npm run cypress:open with Cypress GUI or open cmd in the cypress folder and type npx cypress run
