/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

describe('LiteYouTube Component', () => {
  it('should work correctly', () => {
    cy.visit(
      'http://localhost:6006/iframe.html?id=components-liteyoutube--basic'
    )
    cy.get('button').should('be.visible').click()
    cy.get('iframe').should('be.visible')
  })
})
