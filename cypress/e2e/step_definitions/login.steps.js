import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on login page", () => {
  cy.visit("https://practicesoftwaretesting.com/auth/login");
});

When("I login with valid credentials", () => {
  cy.get('[data-test="email"]').type("customer@practicesoftwaretesting.com");
  cy.get('[data-test="password"]').type("welcome01");
  cy.get('[data-test="login-submit"]').click();
});

Then("I should be logged in successfully", () => {
  cy.url().should("not.include", "/auth/login");
});
