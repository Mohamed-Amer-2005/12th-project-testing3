Feature: Login

  Scenario: Valid login
    Given I am on login page
    When I login with valid credentials
    Then I should be logged in successfully