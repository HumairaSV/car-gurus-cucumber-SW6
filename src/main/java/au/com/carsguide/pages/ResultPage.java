package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;

public class ResultPage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    @CacheLookup
    @FindBy(xpath = "//h5[@class = 'carListing--textHeading']")
    WebElement verifyMake;

 public String verifyTheMakeOfTheCarInResults(){
        log.info("verify the make of the car in the results" + verifyMake.toString());
        return getTextFromElement(verifyMake);
    }
}
