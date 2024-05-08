/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to change the browser's language settings.
     * @example cy.changeNavigatorLanguage("fr")
     */
    changeNavigatorLanguage(language: string): Chainable<void>;
  }
}
