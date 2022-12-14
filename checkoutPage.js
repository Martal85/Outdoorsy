export class CheckoutPage {
  
  constructor() {
      this.dateFieldValue = '[data-testid="add-dates-btn"]';
      this.moreElement = '[data-testid="more-menu-item"]';
      this.searchField = '[data-testid="keyword-search-input-container"]';
      this.searchButton = '[data-testid="apply-filter-button"]';
      this.listOfVechicles = '.SearchPageLayoutstyles__ResultWrapper-sc-aptfzg-0';
      this.vechiclePresentation = '.PageContentstyles__ContentWrapper-sc-11a3eb4-0';

      }
  

  checkTitleEq(value) {
    cy.title().should('eq', value)
  }
  

  selectDates(date1, date2) {
    cy.get(this.dateFieldValue).contains('Add dates').click()

    const calendarField1=cy.get('.DayPicker_day__KNsif[aria-disabled="false"]').contains(date1)
    const calendarField2=cy.get('.DayPicker_day__KNsif[aria-disabled="false"]').contains(date2)

    calendarField1.first().click()
    calendarField2.first().click()
    cy.get(this.dateFieldValue).should('not.contain', 'Add dates')
    }
  
  checkDatesInQueryParameters(date1, date2) {
    cy.url().then(url => {
      //cy.get('.editor-toolbar-actions-save').click();
    let arr = url.split('&');
    let paramObj = {};
      arr.forEach(param => {
        const [ key, value ] = param.split('=');
        paramObj[key] = value;
      });
      
      cy
        .wrap(paramObj)
        .its('from')
        .should('include', date1);
        cy
        .wrap(paramObj)
        .its('to')
        .should('include', date2);    
    });
  } 
  
  openMore()  {
    cy.get(this.moreElement).click()
  }  
  checkQueryParametersBeforeSearch() {
    cy.url().then(url => {
      //cy.get('.editor-toolbar-actions-save').click();
    let arr = url.split('&');
    let paramObj = {};
      arr.forEach(param => {
        const [ key, value ] = param.split('=');
        paramObj[key] = value;
      });
      
      cy
        .wrap(paramObj)
        .its('keywords')
        .should('not.exist');
    });
  } 
    
  doAndValidateKeyWordSearch(value, value1) {
    cy.get(this.searchField).type(value)
    cy.get(this.searchButton).contains(value1).click()
    cy.get( this.listOfVechicles).should('have.length', 1)
  }

  checkQueryParametersAfterSearch(date1, date2, value1) {
    cy.url({ timeout: 10000 }).then(url => {
    let arr = url.split('&');
    let paramObj = {};
      arr.forEach(param => {
        const [ key, value ] = param.split('=');
        paramObj[key] = value;
      });
      
      cy
        .wrap(paramObj)
        .its('from')
        .should('include', date1);
      cy
        .wrap(paramObj)
        .its('to')
        .should('include', date2);
      cy
        .wrap(paramObj)
        .its('keywords')
        .should('include', value1);    
    });
  } 

  selectVechicleFromSearchResults(value) {
    cy.get(this.vechiclePresentation).contains(value).click({ force: true })
  }


  
}

export const checkoutPage = new CheckoutPage();