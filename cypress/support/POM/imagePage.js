export class ImagePage {
  
    constructor() {
      this.closeImageButton = '[data-testid="gallery-overlay-close-btn"]';
      this.popUp = '.photosstyles__Section-sc-1f1rczn-0'
    }

    closePic(){
      cy.get(this.closeImageButton).click({ force: true })
    }
    
    popUpIsOpen() {
      cy.get(this.popUp).should('exist')
    }

    popUpIsClosed() {
      cy.get(this.popUp).should('not.exist')
    }
      
}

export const imagePage = new ImagePage();