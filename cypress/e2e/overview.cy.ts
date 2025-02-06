describe('Overview page', () => {
    it('has headline', () => {
      cy.visit('/')
      cy.contains('h1', 'Overview')
    })
  })