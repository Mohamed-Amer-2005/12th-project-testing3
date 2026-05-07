class HomePage {
  visit() {
    cy.visit("/");
  }

  goToLogin() {
    cy.get('[data-test="nav-sign-in"]').click();
  }

  search(text) {
    cy.get('[data-test="search-query"]').type(text + "{enter}");
  }

  openFirstProduct() {
    cy.get(".card").first().click();
  }
}

export default new HomePage();
