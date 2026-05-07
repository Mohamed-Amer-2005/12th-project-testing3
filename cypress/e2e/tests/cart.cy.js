describe("Cart Flow", () => {
  it("TC13 - Add to cart", () => {
    cy.visit("https://practicesoftwaretesting.com/");

    // اختار أول product card link الحقيقي
    cy.get('[data-test="product-name"]', { timeout: 15000 }).first().click();

    // تأكد إنك داخل صفحة product الصح
    cy.url().should("include", "/product/");

    // استنى الزرار
    cy.get('[data-test="add-to-cart"]', { timeout: 15000 })
      .should("be.visible")
      .click();
  });

  it("TC14 - Open cart", () => {
    cy.visit("https://practicesoftwaretesting.com/checkout");

    cy.url().should("include", "checkout");
  });

  it("TC15 - Go to checkout", () => {
    cy.visit("https://practicesoftwaretesting.com/checkout");

    cy.url().should("include", "checkout");
  });
});
