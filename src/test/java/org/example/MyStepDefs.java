package org.example;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import page.object.page.Home_Page;

public class MyStepDefs extends Utils {
    Home_Page homePage = new Home_Page();

    @Given("^I am on homepage$")
    public void i_am_on_homepage() {
        System.out.println("Home page open from Hooks");
    }

    @When("^I enter job title as \"([^\"]*)\"$")
    public void i_enter_job_title_as(String jobTitle) {
        homePage.searchBy_jobTitle(jobTitle);
    }

    @When("^I enter location as \"([^\"]*)\"$")
    public void i_enter_location_as(String location) {
        homePage.searchBy_location(location);
    }

    @When("^I select distance as \"([^\"]*)\"$")
    public void i_select_distance_as(String distance) {
        homePage.searchBy_distance(distance);
    }

    @Then("^I click on find jobs$")
    public void i_click_on_find_jobs() {
        homePage.click_on_find_jobs();
    }

    @Then("^I validate job search entry as \"([^\"]*)\" jobs in \"([^\"]*)\"$")
    public void i_validate_job_search_entry_as_jobs_in(String jobTitle, String Location) {
        assertByText(homePage.validateJobSearchMessage(), jobTitle + " jobs in " + Location, "Error: Having issue in job search");
    }

    @When("^I click on search jobs$")
    public void i_click_on_search_jobs() {
        homePage.clickOn_searchJobs();
    }

    @When("^I enter minimum salary as\"([^\"]*)\"$")
    public void i_enter_minimum_salary_as(String minSalary) {
        homePage.enter_min_salary(minSalary);
    }

    @When("^I enter maximum salary as \"([^\"]*)\"$")
    public void i_enter_maximum_salary_as(String maxSalary) {
        homePage.enter_max_salary(maxSalary);
    }

    @When("^I Select salary type as \"([^\"]*)\"$")
    public void i_Select_salary_type_as(String salaryType) {
        homePage.select_salary_type(salaryType);
    }

    @When("^I Select posted from as \"([^\"]*)\"$")
    public void i_Select_posted_from_as(String postedFrom) {
        homePage.select_posted_date(postedFrom);
    }

}
