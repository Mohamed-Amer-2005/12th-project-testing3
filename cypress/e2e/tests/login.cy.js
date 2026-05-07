import login from "../../pages/loginPage";

describe("Login", () => {
  it("TC03 - Valid login", () => {
    cy.fixture("users").then((data) => {
      cy.login(data.validUser.email, data.validUser.password);

      cy.url().should("not.include", "/auth/login");
    });
  });

  it("TC04 - Invalid login", () => {
    cy.fixture("users").then((data) => {
      cy.login(data.invalidUser.email, data.invalidUser.password);

      login
        .errorMsg()
        .should("be.visible")
        .and("contain.text", "Invalid email or password");
    });
  });

  it("TC05 - Login form visible", () => {
    cy.visit("https://practicesoftwaretesting.com/auth/login");

    login.email().should("exist");
    login.password().should("exist");
    login.loginBtn().should("exist");
  });
});
