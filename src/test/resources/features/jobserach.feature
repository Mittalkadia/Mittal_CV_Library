Feature: Search Job functionality


  @SearchJob @FeatureRegression
  Scenario Outline: User should be able to search job successfully
    Given I am on homepage
    When I enter job title as "<JobTitle>"
    * I enter location as "<Location>"
    * I select distance as "<Distance>"
    * I click on find jobs
    Then I validate job search entry as "<JobTitle>" jobs in "<Location>"

    Examples:
      | JobTitle           | Location   | Distance        |
      | Qa Engineer        | London     | up to 1 mile    |
      | Qa Tester          | Manchester | up to 75 miles  |
      | Accounts Assistant | Slough     | up to 750 miles |

  @SearchJob @FeatureRegression @AdvanceSearchJob
  Scenario Outline: User should be able to search job from search jobs titles successfully
    Given I am on homepage
    When I click on search jobs
    * I enter job title as "<JobTitle>"
    * I enter location as "<Location>"
    * I select distance as "<Distance>"
    * I enter minimum salary as"<Salary Min>"
    * I enter maximum salary as "<Salary Max>"
    * I Select salary type as "<Salary Type>"
    * I Select posted from as "<Posted in the>"
    * I click on find jobs
    Then I validate job search entry as "<JobTitle>" jobs in "<Location>"

    Examples:
      | JobTitle           | Location   | Distance        | Salary Min | Salary Max | Salary Type | Posted in the |
      | Qa Engineer        | London     | up to 1 mile    | 35000      | 58000      | Per annum   | Last 28 days  |
      | Qa Tester          | Manchester | up to 75 miles  | 2000       | 3700       | Per month   | Last 14 days  |
      | Accounts Assistant | Leeds      | up to 100 miles | 700        | 1200       | Per week    | Last 7 days   |
      | Sale Assistant     | Birmingham | up to 250 miles | 300        | 500        | Per day     | Last 3 days   |
      | Finance Manager    | Slough     | up to 750 miles | 30         | 50         | Per hour    | Last 24 hours |