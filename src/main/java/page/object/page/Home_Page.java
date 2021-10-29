package page.object.page;

import org.example.Utils;
import org.openqa.selenium.By;

public class Home_Page extends Utils {

    private By _jobTitle = By.id("keywords");
    private By _location = By.id("location");
    private By _distance = By.xpath("//select[starts-with(@id,'distance')]");
    private By _salaryMin = By.id("sal-min");
    private By _salaryMax = By.id("sal-max");
    private By _salaryType = By.id("sal-type");
    private By _findJob = By.xpath("//*[contains(@id,'search-btn')]");
    private By _validationMessage = By.className("search-header__title");
    private By _searchJobs = By.xpath("(//a[@href='/search-jobs'])[1]");
    private By _postedDate = By.id("posted-by");


    public void searchBy_jobTitle(String JobTitle) {
        enterText(_jobTitle, JobTitle);
    }

    public void searchBy_location(String Location) {
        enterText(_location, Location);
    }

    public void searchBy_distance(String distanceFrom) {
        selectFromDropdownByVisibleText(_distance, distanceFrom);
    }

    public void click_on_find_jobs() {
        clickOnElement(_findJob);
    }

    public String validateJobSearchMessage() {
        return get_Text_From_Element(_validationMessage);
    }


    public void clickOn_searchJobs() {
        clickOnElement(_searchJobs);
    }

    public void enter_min_salary(String salaryMin) {
        enterText(_salaryMin, salaryMin);
    }

    public void enter_max_salary(String salaryMax) {
        enterText(_salaryMax, salaryMax);
    }

    public void select_salary_type(String SalaryType) {
        selectFromDropdownByVisibleText(_salaryType, SalaryType);
    }

    public void select_posted_date(String PostedFrom) {
        selectFromDropdownByVisibleText(_postedDate, PostedFrom);
    }
}
