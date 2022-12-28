import { checkoutPage } from "../support/POM ourdoorsy/checkoutPage";
import { reservePage } from "../support/POM ourdoorsy/reservePage";
import { imagePage } from "../support/POM ourdoorsy/imagePage";

describe('Checkout pages', function () {
  before ( () => {
      cy.viewport(1680, 1050)
      cy.OpenHomePage()
  });
  
  // should have a page title "Martin RV Rentals.com"
  it('should have a page title', () => {
    checkoutPage.checkTitleEq('Martin RV Rentals.com')
  });
  
    let date1 = new Date();
    date1.setDate(date1.getDate() + 7)
    let dd1 = String(date1.getDate()).padStart(2, '0');
    date1 =  dd1.replace('01', '5').replace('02', '5').replace('03', '5').replace('04', '5').replace('05', '5').replace('06', '6').replace('07', '7').replace('08', '8').replace('09', '9')

    let date2 = new Date();
    date2.setDate(date2.getDate() + 16)
    let dd2 = String(date2.getDate()).padStart(2, '0');
    date2 = dd2.replace('01', '5').replace('02', '5').replace('03', '5').replace('04', '5').replace('05', '5').replace('06', '6').replace('07', '7').replace('08', '8').replace('09', '9');
    
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
    imagePage.closePic()
    cy.url({ timeout: 10000 }).should('not.include','photos')
    imagePage.popUpIsClosed()
    cy.screenshot('3.Transition back to vehicle page')
  });
})