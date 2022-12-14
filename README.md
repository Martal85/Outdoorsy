# Outdoorsy
The project is built with https://cypress.io, mocha and chai and is using https://www.npmjs.com/package/cypress-mochawesome-reporter as HTML reporter.
I used Cypress v12.01 so its recommend to use this version to run the tests.
If you wish to use the mochawesome-reporter you have to install it first

The tests can be found under e2e folder. Paje objects can be found under support folder in POM folder.

The HTML report can be found in the project's folder under reports > index.html.

Steps to run tests:

1.Clone the repo

2.Paste the files in their respective places

3.Run the test files using npm run cypress:run in headless mode or npm run cypress:open with Cypress GUI or open cmd in the cypress folder and type npx cypress run

Notes: In case that 3rd test fail on row 23 - its.keywords you have to increase the wait() value before it. The fail is caused from slow internet connection. Usual execution time is between 11s and 13s

I decided to take some extra time and made it the way I wanted it to look. What I would improve if I have more time are two things:
- to add a validation for the dates being selected, so that the correct values do not have to be adjusted manually;
- to fix the problem of waiting for the new link to load after adding parameters to it and remove the wait() function
