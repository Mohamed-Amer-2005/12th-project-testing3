import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on home page", () => {
  cy.visit("https://practicesoftwaretesting.com/");
});

When("I search for {string}", (text) => {
  cy.get('[data-test="search-query"]').type(text);
  cy.get('[data-test="search-submit"]').click();
});

Then("I should see results", () => {
  cy.get("body").should("contain.text", "Hammer");
});
