// Reference Cypress types
/// <reference types="cypress" />

Cypress.Commands.add("changeNavigatorLanguage", (language: string) => {
  cy.window().then((window) => {
    Object.defineProperty(window.navigator, "language", {
      value: language,
      configurable: true,
    });
    Object.defineProperty(window.navigator, "languages", {
      value: [language],
      configurable: true,
    });
    window.alert(`Browser language changed to: ${language}`);
  });
});
