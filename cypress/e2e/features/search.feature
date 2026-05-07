Feature: Search

Scenario: Valid search
  Given I am on home page
  When I search for "Hammer"
  Then I should see results