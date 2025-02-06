describe('Overview page', () => {
    it('has headline', () => {
      cy.visit('/pots')
      cy.contains('h1', 'Pots')
    })
  })