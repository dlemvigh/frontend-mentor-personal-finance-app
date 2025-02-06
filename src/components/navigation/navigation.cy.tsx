import React from 'react'
import { Navigation } from './navigation'

describe('<Navigation />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.viewport(1440, 1080)
    cy.mount(<Navigation />)
  })
})