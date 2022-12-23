package au.com.carsguide.cucumber.steps;

import au.com.carsguide.pages.HomePage;
import au.com.carsguide.pages.ResultPage;
import au.com.carsguide.pages.SearchCarsPage;
import au.com.carsguide.pages.UsedCarsPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class BuySteps {
    @When("^I mouse hover on buy\\+sell tab$")
    public void iMouseHoverOnBuySellTab() {
        new HomePage().mouseHoverOnBuySellTab();
    }

    @And("^I click Search Cars link$")
    public void iClickSearchCarsLink() {
        new HomePage().clickOnSearchCarsLink();
    }

    @Then("^I navigate to \"([^\"]*)\" page$")
    public void iNavigateToPage(String expected) {
        Assert.assertTrue("Not navigated to search cars page", new SearchCarsPage().verifySearchCarsPageText().contains(expected));
    }

    @And("^I select make \"([^\"]*)\"$")
    public void iSelectMake(String make) {
        new SearchCarsPage().selectMakeOfTheCarFromDropDownList(make);
    }

    @And("^I select model \"([^\"]*)\"$")
    public void iSelectModel(String model) {
        new SearchCarsPage().selectModelOfTheCarFromDropDownList(model);
    }

    @And("^I select location \"([^\"]*)\"$")
    public void iSelectLocation(String location) {
        new SearchCarsPage().selectLocationFromDropDownList(location);
    }

    @And("^I select price \"([^\"]*)\"$")
    public void iSelectPrice(String price) {
        new SearchCarsPage().selectPriceFromDropDownList(price);
    }

    @And("^I click on Find My Next Car tab$")
    public void iClickOnFindMyNextCarTab() {
        new SearchCarsPage().clickOnFindMyNextCar();
    }

    @Then("^I should see the make \"([^\"]*)\" in results$")
    public void iShouldSeeTheMakeInResults(String expected) {
        Assert.assertTrue("Unable to verify the make of the car", new ResultPage().verifyTheMakeOfTheCarInResults().contains(expected));
    }

    @And("^I click Used link$")
    public void iClickUsedLink() {
        new HomePage().clickOnUsedLink();
    }

    @Then("^I navigate to the \"([^\"]*)\" page$")
    public void iNavigateToThePage(String expected)  {
        Assert.assertTrue("Not navigated to used cars page", new UsedCarsPage().verifyUsedPageText().contains(expected));
    }
}
