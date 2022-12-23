Feature: Search functionality
  As a user I want to use the search functionality to search different cars on carsguide website

  Background: I am on homepage

  @Smoke @Regression
  Scenario Outline: Search the buy car with model
    When  I mouse hover on buy+sell tab
    And   I click Search Cars link
    Then  I navigate to "New & Used Car Search" page
    And   I select make "<make>"
    And   I select model "<model>"
    And   I select location "<location>"
    And   I select price "<price>"
    And   I click on Find My Next Car tab
    Then  I should see the make "<make>" in results

    Examples:
      | make       | model     | location               | price   |
      | Alfa Romeo | GTV       | NSW - All              | $40,000 |
      | Audi       | E-Tron    | NSW - Far West         | $35,000 |
      | Kia        | Sportage  | SA - Murray            | $30,000 |
      | BMW        | X3        | NSW - New England      | $45,000 |
      | Land Rover | Discovery | VIC - Central Victoria | $60,000 |
      | Honda      | Civic     | SA - Eyre Peninsula    | $20,000 |

  @Sanity @Regression
  Scenario Outline: Search the used car with model
    When  I mouse hover on buy+sell tab
    And   I click Used link
    Then  I navigate to the "Used Cars For Sale" page
    And   I select make "<make>"
    And   I select model "<model>"
    And   I select location "<location>"
    And   I select price "<price>"
    And   I click on Find My Next Car tab
    Then  I should see the make "<make>" in results

    Examples:
      | make    | model    | location            | price   |
      | Hyundai | Kona     | NSW - Far West      | $10,000 |
      | Isuzu   | FSS      | QLD - Brisbane      | $7,500  |
      | Jeep    | Cherokee | QLD - Townsville    | $15,000 |
      | Kia     | Sorento  | SA - Barossa Valley | $20,000 |
      | MG      | ZS EV    | TAS - South         | $25,000 |
      | Subaru  | Outback  | VIC - South Western | $40,000 |