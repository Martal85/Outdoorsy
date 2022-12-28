export class ReservePage {
  
    constructor() {
      this.startDateFieldValue = '.DayPicker_start__VOdS1';
      this.endDateFieldValue = '.DayPicker_end__ACPXp';
      this.dateTitle = '.Sectionstyles__SectionTitle-sc-1hma985-0';
      this.clearCalendarButton = '[data-testid="clear-calendar-selected-data-btn"]';
      this.imageField = '[data-testid="img"]';
    }
  
    checkDates(date1, date2) {
        cy.get(this.startDateFieldValue)
            .contains(date1)
            .should('exist')
            .and('be.visible')

        cy.get(this.endDateFieldValue)
            .contains(date2)
            .should('exist')
            .and('be.visible')

        cy.get(this.clearCalendarButton)
            .should('be.visible')
            .and('be.enabled') 

        cy.get(this.dateTitle, { timeout: 30000 })
            .should(($dateTitle) => {
                expect($dateTitle).to.contain(date1)
                expect($dateTitle).to.contain('—')
                expect($dateTitle).to.contain(date2)
        })    
    }  
    
    imageCheck() {
        cy.get(this.imageField)
            .first()
            .should('have.attr', 'src')
        cy.get(this.imageField)
            .first()
            .click()         
    }  
}

export const reservePage = new ReservePage();