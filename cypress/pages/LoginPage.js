class LoginPage {
  email() {
    return cy.get('[data-test="email"]');
  }

  password() {
    return cy.get('[data-test="password"]');
  }

  loginBtn() {
    return cy.get('[data-test="login-submit"]');
  }

  errorMsg() {
    return cy.get('[data-test="login-error"]');
  }
}

export default new LoginPage();
