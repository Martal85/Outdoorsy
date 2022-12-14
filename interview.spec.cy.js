
import { should } from "chai";
import { checkoutPage } from "../support/POM/checkoutPage";
import { reservePage } from "../support/POM/reservePage";
import { imagePage } from "../support/POM/imagePage";

describe('Checkout pages', function () {
  before ( () => {
      cy.viewport(1680, 1050)
      cy.OpenHomePage()
    });
  
  // should have a page title "Martin RV Rentals.com"
  it('should have a page title', () => {
    checkoutPage.checkTitleEq('Martin RV Rentals.com')
    });
  
    let date1 =10 //For date1 use todays date or after current date but before the date2
    let date2 =13
  // Select dates on the calendar and ensure they are applied
  it('should be able to select dates', () => {
    checkoutPage.selectDates(date1,date2)
    checkoutPage.checkDatesInQueryParameters(date1,date2)
    });
  
    // Click the "More" menu button and perform a search using the keyword search and ensure the term is applied
    let keyword = '30'
  it('should be able to do a keyword search', () => {
    checkoutPage.openMore()
    checkoutPage.checkQueryParametersBeforeSearch(keyword)
    checkoutPage.doAndValidateKeyWordSearch(keyword, "Show 1 vehicle")
    cy.wait(500)  //we need it because the fuction is executed before the new url is loaded
    checkoutPage.checkQueryParametersAfterSearch(date1, date2, keyword)
    });

    // Select a vehicle from the search results 
    // Ensure transition to vehicle page is successful
    // Ensure dates are pre-selected on calendar on vehicle page
  it('should be able select a vehicle listing', () => {
    checkoutPage.selectVechicleFromSearchResults(30)
    cy.url().should('include', 'reserve/')
    cy.screenshot('1.Transition to vehicle page')
    reservePage.checkDates(date1,date2)  
    
    });

    // Select a vehicle image in the header and ensure page transitions to photos page
  it('should be able to select and view vehicle in image gallery', () => {
    cy.url().should('not.include','photos')
    reservePage.imageCheck() 
    cy.url().should('include','photos')
    imagePage.popUpIsOpen()
    cy.wait(1000) //this is needed because it takes more time to load the images
    cy.screenshot('2.Transition to image page')
    });

    // Close the modal on the image popup and ensure page transitions back to vehicle listing page
  it('should be able to close image gallery popup', () => {
    cy.wait(500)
    imagePage.closePic()
    cy.url({ timeout: 10000 }).should('not.include','photos')
    imagePage.popUpIsClosed()
    cy.screenshot('3.Transition back to vehicle page')
    });
  })