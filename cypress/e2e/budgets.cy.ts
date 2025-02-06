describe('Budgets page', () => {
    it('has headline', () => {
      cy.visit('/budgets')
      cy.contains('h1', 'Budgets')
    })
  })