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
        log.info("Verify search cars page text" + verifyPageText.toString());
    return getTextFromElement(verifyPageText);
    }

    public void selectMakeOfTheCarFromDropDownList(String text){
        log.info("Select the make of the car "+ make + " from the drop down menu" + make.toString());
        selectByVisibleTextFromDropDown(make, text);
    }

    public void selectModelOfTheCarFromDropDownList(String text){
        log.info("Select the make of the car "+ model + " from the drop down menu" + model.toString());
        selectByVisibleTextFromDropDown(model, text);
    }

    public void selectLocationFromDropDownList(String text){
        log.info("Select the make of the car "+ location + " from the drop down menu" + location.toString());
        selectByVisibleTextFromDropDown(location, text);
    }

    public void selectPriceFromDropDownList(String text){
        log.info("Select the make of the car "+ price + " from the drop down menu" + price.toString());
        selectByVisibleTextFromDropDown(price, text);
    }

    public void clickOnFindMyNextCar(){
        log.info("click on Find my next car link" + findNextCar.toString());
        clickOnElement(findNextCar);
    }


   }
