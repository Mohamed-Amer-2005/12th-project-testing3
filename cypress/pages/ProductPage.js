class ProductPage {
  addToCart() { return cy.get('[data-test="add-to-cart"]'); }
}
export default new ProductPage();