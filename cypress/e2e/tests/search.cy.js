import search from "../../pages/searchPage";

describe("Search", () => {
  beforeEach(() => {
    cy.visit("https://practicesoftwaretesting.com/");
  });

  it("TC07 - Valid search", () => {
    search.searchInput().type("Hammer{enter}");

    cy.get("body").should("contain.text", "Hammer");
  });

  it("TC08 - Invalid search", () => {
    search.searchInput().type("asdasdasd12345{enter}");

    cy.get("body").should("contain.text", "There are no products found.");
  });

  it("TC09 - Search visible", () => {
    search.searchInput().should("exist");
  });
});
