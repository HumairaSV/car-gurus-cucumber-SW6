package au.com.carsguide.cucumber.steps;

import au.com.carsguide.pages.FindDealerPage;
import au.com.carsguide.pages.HomePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class FindDealers {

    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @And("^I click Find a Dealer$")
    public void iClickFindADealer() {
        new HomePage().clickOnFindDealerLink();
    }

    @Then("^I navigate to ‘car-dealers’ page$")
    public void iNavigateToCarDealersPage() {
Assert.assertTrue("Not navigated to find dealers page",
        new FindDealerPage().verifyFindDealerPageText().contains("Dealers"));
    }




    @And("^I should see the dealer names \"([^\"]*)\" are display on page$")
    public void iShouldSeeTheDealerNamesAreDisplayOnPage(String dealerName)throws InterruptedException{
        new FindDealerPage().findDealerAndClick(dealerName);
        Thread.sleep(5000);
        Assert.assertTrue("Unable to see the dealer name displayed on the page",
                new FindDealerPage().verifyDealerPageName(dealerName).contains(dealerName));
    }
}
