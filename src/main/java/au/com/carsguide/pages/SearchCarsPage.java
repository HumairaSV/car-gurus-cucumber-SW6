package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SearchCarsPage extends Utility {

    private static final Logger log = LogManager.getLogger(SearchCarsPage.class.getName());
    public SearchCarsPage() {
        PageFactory.initElements(driver, this);
    }


    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'New & Used Car Search - carsguide')]")
    WebElement verifyPageText;

    @CacheLookup
    @FindBy(id = "makes")
    WebElement make;

    @CacheLookup
    @FindBy(id = "models")
    WebElement model;

    @CacheLookup
    @FindBy(id = "locations")
    WebElement location;

    @CacheLookup
    @FindBy(id = "priceTo")
    WebElement price;

    @CacheLookup
    @FindBy(id = "search-submit")
    WebElement findNextCar;



    public String verifySearchCarsPageText(){
    return getTextFromElement(verifyPageText);
    }

    public void selectMakeOfTheCarFromDropDownList(String text){
        selectByVisibleTextFromDropDown(make, text);
    }

    public void selectModelOfTheCarFromDropDownList(String text){
        selectByVisibleTextFromDropDown(model, text);
    }

    public void selectLocationFromDropDownList(String text){
        selectByVisibleTextFromDropDown(location, text);
    }

    public void selectPriceFromDropDownList(String text){
        selectByVisibleTextFromDropDown(price, text);
    }

    public void clickOnFindMyNextCar(){
        clickOnElement(findNextCar);
    }


   }
