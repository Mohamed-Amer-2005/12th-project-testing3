Cypress.Commands.add("visitHome", () => {
  cy.visit("/");
  cy.get("app-root").should("exist");
});

Cypress.Commands.add("login", (email, password) => {
  cy.visit("https://practicesoftwaretesting.com/auth/login");

  cy.get('[data-test="email"]').type(email);
  cy.get('[data-test="password"]').type(password);
  cy.get('[data-test="login-submit"]').click();
});
