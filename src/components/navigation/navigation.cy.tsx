import React from 'react'
import { Navigation } from './navigation'

describe('<Navigation />', () => {
  it('desktop view', () => {
    // see: https://on.cypress.io/mounting-react
    cy.viewport(1440, 1080)
    cy.mount(<Navigation />)
  })
  it('tablet view', () => {
    // see: https://on.cypress.io/mounting-react
    cy.viewport(768, 1024)
    cy.mount(<Navigation />)
  })

  it('mobile view', () => {
    // see: https://on.cypress.io/mounting-react
    cy.viewport(375, 750)
    cy.mount(<Navigation />)
  })
})