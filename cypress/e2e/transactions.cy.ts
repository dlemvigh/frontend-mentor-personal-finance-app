describe('Transactions page', () => {
    it('has headline', () => {
      cy.visit('/transactions')
      cy.contains('h1', 'Transactions')
    })
  })