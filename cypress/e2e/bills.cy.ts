describe('Recurring Bills page', () => {
    it('has headline', () => {
      cy.visit('/bills')
      cy.contains('h1', 'Recurring bills')
    })
  })