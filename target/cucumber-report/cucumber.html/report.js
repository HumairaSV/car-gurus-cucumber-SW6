$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("finddealers.feature");
formatter.feature({
  "line": 1,
  "name": "Find the dealers and verify",
  "description": "",
  "id": "find-the-dealers-and-verify",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click Find a Dealer",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘car-dealers’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should see the dealer names \"\u003cdealersName\u003e\" are display on page",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;",
  "rows": [
    {
      "cells": [
        "dealersName"
      ],
      "line": 12,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;1"
    },
    {
      "cells": [
        "3 Point Motors Epping"
      ],
      "line": 13,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;2"
    },
    {
      "cells": [
        "4WD \u0026 Commercial Centre"
      ],
      "line": 14,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;3"
    },
    {
      "cells": [
        "5 Star Auto Trade"
      ],
      "line": 15,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;4"
    },
    {
      "cells": [
        "A1 Motors Company New Town"
      ],
      "line": 16,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;5"
    },
    {
      "cells": [
        "ANDREA MOTORI SERVICE"
      ],
      "line": 17,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 34674485100,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click Find a Dealer",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘car-dealers’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should see the dealer names \"3 Point Motors Epping\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FindDealers.iAmOnHomepage()"
});
formatter.result({
  "duration": 182599200,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 697002400,
  "status": "passed"
});
formatter.match({
  "location": "FindDealers.iClickFindADealer()"
});
formatter.result({
  "duration": 1333774500,
  "status": "passed"
});
formatter.match({
  "location": "FindDealers.iNavigateToCarDealersPage()"
});
formatter.result({
  "duration": 190170400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3 Point Motors Epping",
      "offset": 31
    }
  ],
  "location": "FindDealers.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 11171719800,
  "status": "passed"
});
formatter.after({
  "duration": 686620000,
  "status": "passed"
});
formatter.before({
  "duration": 32916774700,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click Find a Dealer",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘car-dealers’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should see the dealer names \"4WD \u0026 Commercial Centre\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FindDealers.iAmOnHomepage()"
});
formatter.result({
  "duration": 22700,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 172104000,
  "status": "passed"
});
formatter.match({
  "location": "FindDealers.iClickFindADealer()"
});
formatter.result({
  "duration": 1364296400,
  "status": "passed"
});
formatter.match({
  "location": "FindDealers.iNavigateToCarDealersPage()"
});
formatter.result({
  "duration": 269913800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4WD \u0026 Commercial Centre",
      "offset": 31
    }
  ],
  "location": "FindDealers.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 11573279800,
  "status": "passed"
});
formatter.after({
  "duration": 672244800,
  "status": "passed"
});
formatter.before({
  "duration": 32804913900,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click Find a Dealer",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘car-dealers’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should see the dealer names \"5 Star Auto Trade\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FindDealers.iAmOnHomepage()"
});
formatter.result({
  "duration": 28700,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 185879700,
  "status": "passed"
});
formatter.match({
  "location": "FindDealers.iClickFindADealer()"
});
formatter.result({
  "duration": 1302391800,
  "status": "passed"
});
formatter.match({
  "location": "FindDealers.iNavigateToCarDealersPage()"
});
formatter.result({
  "duration": 171864500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5 Star Auto Trade",
      "offset": 31
    }
  ],
  "location": "FindDealers.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 11640267200,
  "status": "passed"
});
formatter.after({
  "duration": 669571100,
  "status": "passed"
});
formatter.before({
  "duration": 33257384100,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click Find a Dealer",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘car-dealers’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should see the dealer names \"A1 Motors Company New Town\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FindDealers.iAmOnHomepage()"
});
formatter.result({
  "duration": 28700,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 169723400,
  "status": "passed"
});
formatter.match({
  "location": "FindDealers.iClickFindADealer()"
});
formatter.result({
  "duration": 1574671000,
  "status": "passed"
});
formatter.match({
  "location": "FindDealers.iNavigateToCarDealersPage()"
});
formatter.result({
  "duration": 135290800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A1 Motors Company New Town",
      "offset": 31
    }
  ],
  "location": "FindDealers.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 29263086600,
  "status": "passed"
});
formatter.after({
  "duration": 706470800,
  "status": "passed"
});
formatter.before({
  "duration": 32991624800,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click Find a Dealer",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘car-dealers’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should see the dealer names \"ANDREA MOTORI SERVICE\" are display on page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FindDealers.iAmOnHomepage()"
});
formatter.result({
  "duration": 62200,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 162525600,
  "status": "passed"
});
formatter.match({
  "location": "FindDealers.iClickFindADealer()"
});
formatter.result({
  "duration": 962598400,
  "status": "passed"
});
formatter.match({
  "location": "FindDealers.iNavigateToCarDealersPage()"
});
formatter.result({
  "duration": 47533600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ANDREA MOTORI SERVICE",
      "offset": 31
    }
  ],
  "location": "FindDealers.iShouldSeeTheDealerNamesAreDisplayOnPage(String)"
});
formatter.result({
  "duration": 12478952200,
  "status": "passed"
});
formatter.after({
  "duration": 689053400,
  "status": "passed"
});
});