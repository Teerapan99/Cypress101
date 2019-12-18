describe('Cypress Test', function() {
    beforeEach( function (){
        cy.visit('https://www.cypress.io')
    })

    it('should has text \'The web has evolved.\'', function() {
        cy.get('[class="tagLine Hero__TagLine-sc-15j8hrl-0 hsGIVn"]').should('contain', 'The web has evolved.')
        
    })
})

