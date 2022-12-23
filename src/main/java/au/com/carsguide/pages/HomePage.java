package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    @CacheLookup
    @FindBy(linkText = "buy + sell")
    WebElement buySellTab;

    @CacheLookup
    @FindBy(linkText = "Search Cars")
    WebElement searchCarsLink;

    @CacheLookup
    @FindBy(linkText = "Used")
    WebElement usedLink;

    @CacheLookup
    @FindBy(linkText = "Find a Dealer")
    WebElement findDealer;

   public void mouseHoverOnBuySellTab(){
        log.info("hovering mouse on the buy + sell tab" + buySellTab.toString());
        mouseHoverToElement(buySellTab);
    }

    public void clickOnSearchCarsLink(){
        log.info("Clicking on Search cars link" + searchCarsLink.toString());
        clickOnElement(searchCarsLink);
    }

    public void clickOnUsedLink(){
        log.info("Clicking on used link" + usedLink.toString());
        clickOnElement(usedLink);
    }

    public void clickOnFindDealerLink(){
        log.info("Clicking on used link" + findDealer.toString());
        clickOnElement(findDealer);
    }
}
