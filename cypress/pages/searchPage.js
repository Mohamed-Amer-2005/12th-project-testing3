class SearchPage {
  searchInput() {
    return cy.get('[data-test="search-query"]');
  }

  productCards() {
    return cy.get(".card");
  }
}

export default new SearchPage();
