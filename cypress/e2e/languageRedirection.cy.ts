/// <reference types="cypress" />

describe("Language Redirection Tests with Navigator Language Change", () => {
  it("Redirects to French page", () => {
    cy.visit("/en");

    cy.window().then((window) => {
      Object.defineProperty(window.navigator, "language", {
        value: "fr",
        configurable: true,
      });
      Object.defineProperty(window.navigator, "languages", {
        value: ["fr"],
        configurable: true,
      });
      window.alert(`Browser language changed to: ${window.navigator.language}`);
    });

    cy.reload();
    cy.wait(2000);
    cy.url().should("include", "/fr");
    cy.contains("Bienvenue à la version française !");
  });

  it("Redirects to Japanese page", () => {
    cy.visit("/en");

    cy.window().then((window) => {
      Object.defineProperty(window.navigator, "language", {
        value: "ja",
        configurable: true,
      });
      Object.defineProperty(window.navigator, "languages", {
        value: ["ja"],
        configurable: true,
      });
      window.alert(`Browser language changed to: ${window.navigator.language}`);
    });

    cy.reload();
    cy.wait(2000);
    cy.url().should("include", "/jp");
    cy.contains("日本語版へようこそ！");
  });

  it("Redirects to English page by default", () => {
    cy.visit("/fr");

    cy.window().then((window) => {
      Object.defineProperty(window.navigator, "language", {
        value: "en",
        configurable: true,
      });
      Object.defineProperty(window.navigator, "languages", {
        value: ["en"],
        configurable: true,
      });
      window.alert(`Browser language changed to: ${window.navigator.language}`);
    });

    cy.reload();
    cy.wait(2000);
    cy.url().should("include", "/en");
    cy.contains("Welcome to the English version!");
  });
});
