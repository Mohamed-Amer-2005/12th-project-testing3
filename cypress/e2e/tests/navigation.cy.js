it("TC15 - Navbar navigation", () => {
  cy.visit("/");

  cy.get("nav").within(() => {
    cy.contains(/home/i).click();
  });

  cy.url().should("eq", "https://practicesoftwaretesting.com/");
});
