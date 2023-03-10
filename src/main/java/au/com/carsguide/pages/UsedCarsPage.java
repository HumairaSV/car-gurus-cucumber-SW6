package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;

public class UsedCarsPage extends Utility {

    private static final Logger log = LogManager.getLogger(UsedCarsPage.class.getName());

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Used Cars For Sale')]")
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

     public String verifyUsedPageText(){
        log.info("Verify the used cars page text" + verifyPageText.toString());
        return getTextFromElement(verifyPageText);
    }

}
