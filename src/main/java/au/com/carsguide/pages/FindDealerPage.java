package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;

public class FindDealerPage extends Utility {

    private static final Logger log = LogManager.getLogger(FindDealerPage.class.getName());


    @CacheLookup
    @FindBy(xpath = "//h2[contains(text(),'Dealers')]")
    WebElement dealerPageText;

    @CacheLookup
    @FindBy(xpath = "//input[@id='keyword']")
    WebElement searchDealers;

    @CacheLookup
    @FindBy(xpath = "//a[@id='dealer-search-submit']")
    WebElement clickFindDealers;

    public String verifyFindDealerPageText(){
        return getTextFromElement(dealerPageText);
    }

    public void findDealerAndClick(String dealerName){
        sendTextToElement(searchDealers,dealerName);
        clickOnElement(clickFindDealers);
        By dealers = By.xpath("//a[contains(text(),'"+ dealerName+ "')]");
        clickOnElement(dealers);
    }

    public String verifyDealerPageName(String dealerName){
        By dealerPage = By.xpath("//h1[contains(text(), '"+dealerName+"')]");
        return getTextFromElement(dealerPage);
    }

}
