describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("app-root", { timeout: 15000 }).should("exist");
  });

  it("TC01 - Home loads", () => {
    cy.url().should("include", "/");
  });

  it("TC02 - Navbar exists", () => {
    cy.get("nav, header").should("exist");

    cy.get("nav, header").within(() => {
      cy.contains(/home|categories|cart|login/i).should("exist");
    });
  });
});
