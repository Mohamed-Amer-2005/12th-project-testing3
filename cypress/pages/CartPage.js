class CartPage {
  firstProduct() {
    return cy.get(".card").first();
  }

  addToCartBtn() {
    return cy.get('[data-test="add-to-cart"]');
  }

  checkoutBtn() {
    return cy.contains(/checkout/i);
  }
}

export default new CartPage();
