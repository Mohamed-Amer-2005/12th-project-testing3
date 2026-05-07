class ProductPage {
  addToCart() {
    cy.get('[data-test="add-to-cart"]').click();
  }
}

export default new ProductPage();
