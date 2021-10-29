package org.example;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;

public class Utils extends Base_Page {

    public static void assertByText(String actualResult, String expectedResult, String errorMessage) {
        Assert.assertEquals(actualResult, expectedResult, errorMessage);
    }

    // method for enter text
    public static void enterText(By by, String text) {
        driver.findElement(by).sendKeys(text);
    }

    // method for click on element
    public static void clickOnElement(By by) {
        driver.findElement(by).click();
    }

    //method for select from dropDown by text
    public static void selectFromDropdownByVisibleText(By by, String text) {
        Select select = new Select(driver.findElement(by));
        select.selectByVisibleText(text);
    }

    //method to  get text
    public static String get_Text_From_Element(By by) {
        return driver.findElement(by).getText();
    }

}
