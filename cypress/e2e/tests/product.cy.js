describe("Product", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("app-root", { timeout: 15000 }).should("exist");
  });

  it("TC10 - Open product", () => {
    cy.get("a, button")
      .contains(/view|details|hammer|product/i)
      .first()
      .click({ force: true });

    cy.url({ timeout: 15000 }).should("include", "product");
  });

  it("TC11 - Product UI", () => {
    cy.visit("https://practicesoftwaretesting.com/");

    cy.get("a[href*='product']").first().click();

    cy.url().should("include", "product");

    cy.get('[data-test="add-to-cart"]', { timeout: 15000 }).should(
      "be.visible",
    );
  });

  it("TC12 - Products exist", () => {
    cy.get(".card, .product, .col, article").should("exist");
  });
});
