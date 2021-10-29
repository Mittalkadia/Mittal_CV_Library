$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/jobserach.feature");
formatter.feature({
  "line": 1,
  "name": "Search Job functionality",
  "description": "",
  "id": "search-job-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "User should be able to search job successfully",
  "description": "",
  "id": "search-job-functionality;user-should-be-able-to-search-job-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@SearchJob"
    },
    {
      "line": 4,
      "name": "@FeatureRegression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter job title as \"\u003cJobTitle\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter location as \"\u003cLocation\u003e\"",
  "keyword": "* "
});
formatter.step({
  "line": 9,
  "name": "I select distance as \"\u003cDistance\u003e\"",
  "keyword": "* "
});
formatter.step({
  "line": 10,
  "name": "I click on find jobs",
  "keyword": "* "
});
formatter.step({
  "line": 11,
  "name": "I validate job search entry as \"\u003cJobTitle\u003e\" jobs in \"\u003cLocation\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "search-job-functionality;user-should-be-able-to-search-job-successfully;",
  "rows": [
    {
      "cells": [
        "JobTitle",
        "Location",
        "Distance"
      ],
      "line": 14,
      "id": "search-job-functionality;user-should-be-able-to-search-job-successfully;;1"
    },
    {
      "cells": [
        "Qa Engineer",
        "London",
        "up to 1 mile"
      ],
      "line": 15,
      "id": "search-job-functionality;user-should-be-able-to-search-job-successfully;;2"
    },
    {
      "cells": [
        "Qa Tester",
        "Manchester",
        "up to 75 miles"
      ],
      "line": 16,
      "id": "search-job-functionality;user-should-be-able-to-search-job-successfully;;3"
    },
    {
      "cells": [
        "Accounts Assistant",
        "Leicestershire",
        "up to 750 miles"
      ],
      "line": 17,
      "id": "search-job-functionality;user-should-be-able-to-search-job-successfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 12461861600,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User should be able to search job successfully",
  "description": "",
  "id": "search-job-functionality;user-should-be-able-to-search-job-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@FeatureRegression"
    },
    {
      "line": 4,
      "name": "@SearchJob"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter job title as \"Qa Engineer\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter location as \"London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "* "
});
formatter.step({
  "line": 9,
  "name": "I select distance as \"up to 1 mile\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.step({
  "line": 10,
  "name": "I click on find jobs",
  "keyword": "* "
});
formatter.step({
  "line": 11,
  "name": "I validate job search entry as \"Qa Engineer\" jobs in \"London\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.i_am_on_homepage()"
});
formatter.result({
  "duration": 312010900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qa Engineer",
      "offset": 22
    }
  ],
  "location": "MyStepDefs.i_enter_job_title_as(String)"
});
formatter.result({
  "duration": 190551200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 21
    }
  ],
  "location": "MyStepDefs.i_enter_location_as(String)"
});
formatter.result({
  "duration": 142069800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 1 mile",
      "offset": 22
    }
  ],
  "location": "MyStepDefs.i_select_distance_as(String)"
});
formatter.result({
  "duration": 181246000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.i_click_on_find_jobs()"
});
formatter.result({
  "duration": 177547100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qa Engineer",
      "offset": 32
    },
    {
      "val": "London",
      "offset": 54
    }
  ],
  "location": "MyStepDefs.i_validate_job_search_entry_as_jobs_in(String,String)"
});
formatter.result({
  "duration": 3463112600,
  "status": "passed"
});
formatter.after({
  "duration": 1361148700,
  "status": "passed"
});
formatter.before({
  "duration": 6482245700,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User should be able to search job successfully",
  "description": "",
  "id": "search-job-functionality;user-should-be-able-to-search-job-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@FeatureRegression"
    },
    {
      "line": 4,
      "name": "@SearchJob"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter job title as \"Qa Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter location as \"Manchester\"",
  "matchedColumns": [
    1
  ],
  "keyword": "* "
});
formatter.step({
  "line": 9,
  "name": "I select distance as \"up to 75 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.step({
  "line": 10,
  "name": "I click on find jobs",
  "keyword": "* "
});
formatter.step({
  "line": 11,
  "name": "I validate job search entry as \"Qa Tester\" jobs in \"Manchester\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.i_am_on_homepage()"
});
formatter.result({
  "duration": 90000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qa Tester",
      "offset": 22
    }
  ],
  "location": "MyStepDefs.i_enter_job_title_as(String)"
});
formatter.result({
  "duration": 250962500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manchester",
      "offset": 21
    }
  ],
  "location": "MyStepDefs.i_enter_location_as(String)"
});
formatter.result({
  "duration": 167194100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 75 miles",
      "offset": 22
    }
  ],
  "location": "MyStepDefs.i_select_distance_as(String)"
});
formatter.result({
  "duration": 145037600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.i_click_on_find_jobs()"
});
formatter.result({
  "duration": 161868600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qa Tester",
      "offset": 32
    },
    {
      "val": "Manchester",
      "offset": 52
    }
  ],
  "location": "MyStepDefs.i_validate_job_search_entry_as_jobs_in(String,String)"
});
formatter.result({
  "duration": 4079169100,
  "status": "passed"
});
formatter.after({
  "duration": 1344446700,
  "status": "passed"
});
formatter.before({
  "duration": 5725591600,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User should be able to search job successfully",
  "description": "",
  "id": "search-job-functionality;user-should-be-able-to-search-job-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@FeatureRegression"
    },
    {
      "line": 4,
      "name": "@SearchJob"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter job title as \"Accounts Assistant\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter location as \"Leicestershire\"",
  "matchedColumns": [
    1
  ],
  "keyword": "* "
});
formatter.step({
  "line": 9,
  "name": "I select distance as \"up to 750 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.step({
  "line": 10,
  "name": "I click on find jobs",
  "keyword": "* "
});
formatter.step({
  "line": 11,
  "name": "I validate job search entry as \"Accounts Assistant\" jobs in \"Leicestershire\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.i_am_on_homepage()"
});
formatter.result({
  "duration": 64900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accounts Assistant",
      "offset": 22
    }
  ],
  "location": "MyStepDefs.i_enter_job_title_as(String)"
});
formatter.result({
  "duration": 470672700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Leicestershire",
      "offset": 21
    }
  ],
  "location": "MyStepDefs.i_enter_location_as(String)"
});
formatter.result({
  "duration": 215708600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 750 miles",
      "offset": 22
    }
  ],
  "location": "MyStepDefs.i_select_distance_as(String)"
});
formatter.result({
  "duration": 221872200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.i_click_on_find_jobs()"
});
formatter.result({
  "duration": 203141000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accounts Assistant",
      "offset": 32
    },
    {
      "val": "Leicestershire",
      "offset": 61
    }
  ],
  "location": "MyStepDefs.i_validate_job_search_entry_as_jobs_in(String,String)"
});
formatter.result({
  "duration": 4179374300,
  "status": "passed"
});
formatter.after({
  "duration": 1489455200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "User should be able to search job from search jobs titles successfully",
  "description": "",
  "id": "search-job-functionality;user-should-be-able-to-search-job-from-search-jobs-titles-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@SearchJob"
    },
    {
      "line": 19,
      "name": "@FeatureRegression"
    },
    {
      "line": 19,
      "name": "@AdvanceSearchJob"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on search jobs",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter job title as \"\u003cJobTitle\u003e\"",
  "keyword": "* "
});
formatter.step({
  "line": 24,
  "name": "I enter location as \"\u003cLocation\u003e\"",
  "keyword": "* "
});
formatter.step({
  "line": 25,
  "name": "I select distance as \"\u003cDistance\u003e\"",
  "keyword": "* "
});
formatter.step({
  "line": 26,
  "name": "I enter minimum salary as\"\u003cSalary Min\u003e\"",
  "keyword": "* "
});
formatter.step({
  "line": 27,
  "name": "I enter maximum salary as \"\u003cSalary Max\u003e\"",
  "keyword": "* "
});
formatter.step({
  "line": 28,
  "name": "I Select salary type as \"\u003cSalary Type\u003e\"",
  "keyword": "* "
});
formatter.step({
  "line": 29,
  "name": "I Select posted from as \"\u003cPosted in the\u003e\"",
  "keyword": "* "
});
formatter.step({
  "line": 30,
  "name": "I click on find jobs",
  "keyword": "* "
});
formatter.step({
  "line": 31,
  "name": "I validate job search entry as \"\u003cJobTitle\u003e\" jobs in \"\u003cLocation\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "search-job-functionality;user-should-be-able-to-search-job-from-search-jobs-titles-successfully;",
  "rows": [
    {
      "cells": [
        "JobTitle",
        "Location",
        "Distance",
        "Salary Min",
        "Salary Max",
        "Salary Type",
        "Posted in the"
      ],
      "line": 34,
      "id": "search-job-functionality;user-should-be-able-to-search-job-from-search-jobs-titles-successfully;;1"
    },
    {
      "cells": [
        "Qa Engineer",
        "London",
        "up to 1 mile",
        "35000",
        "58000",
        "Per annum",
        "Last 28 days"
      ],
      "line": 35,
      "id": "search-job-functionality;user-should-be-able-to-search-job-from-search-jobs-titles-successfully;;2"
    },
    {
      "cells": [
        "Qa Tester",
        "Manchester",
        "up to 75 miles",
        "2000",
        "3700",
        "Per  month",
        "Last 14 days"
      ],
      "line": 36,
      "id": "search-job-functionality;user-should-be-able-to-search-job-from-search-jobs-titles-successfully;;3"
    },
    {
      "cells": [
        "Accounts Assistant",
        "Leed",
        "up to 100 miles",
        "700",
        "1200",
        "per week",
        "Last 7 days"
      ],
      "line": 37,
      "id": "search-job-functionality;user-should-be-able-to-search-job-from-search-jobs-titles-successfully;;4"
    },
    {
      "cells": [
        "Sale Assistant",
        "Woking",
        "up to 250 miles",
        "300",
        "500",
        "per day",
        "Last 3 days"
      ],
      "line": 38,
      "id": "search-job-functionality;user-should-be-able-to-search-job-from-search-jobs-titles-successfully;;5"
    },
    {
      "cells": [
        "Finance Manger",
        "Leicestershire",
        "up to 750 miles",
        "30",
        "50",
        "per hour",
        "Last 24 hours"
      ],
      "line": 39,
      "id": "search-job-functionality;user-should-be-able-to-search-job-from-search-jobs-titles-successfully;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6350941900,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "User should be able to search job from search jobs titles successfully",
  "description": "",
  "id": "search-job-functionality;user-should-be-able-to-search-job-from-search-jobs-titles-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@AdvanceSearchJob"
    },
    {
      "line": 19,
      "name": "@FeatureRegression"
    },
    {
      "line": 19,
      "name": "@SearchJob"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on search jobs",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter job title as \"Qa Engineer\"",
  "matchedColumns": [
    0
  ],
  "keyword": "* "
});
formatter.step({
  "line": 24,
  "name": "I enter location as \"London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "* "
});
formatter.step({
  "line": 25,
  "name": "I select distance as \"up to 1 mile\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.step({
  "line": 26,
  "name": "I enter minimum salary as\"35000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "* "
});
formatter.step({
  "line": 27,
  "name": "I enter maximum salary as \"58000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "* "
});
formatter.step({
  "line": 28,
  "name": "I Select salary type as \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "* "
});
formatter.step({
  "line": 29,
  "name": "I Select posted from as \"Last 28 days\"",
  "matchedColumns": [
    6
  ],
  "keyword": "* "
});
formatter.step({
  "line": 30,
  "name": "I click on find jobs",
  "keyword": "* "
});
formatter.step({
  "line": 31,
  "name": "I validate job search entry as \"Qa Engineer\" jobs in \"London\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.i_am_on_homepage()"
});
formatter.result({
  "duration": 73800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.i_click_on_search_jobs()"
});
formatter.result({
  "duration": 3016914700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qa Engineer",
      "offset": 22
    }
  ],
  "location": "MyStepDefs.i_enter_job_title_as(String)"
});
formatter.result({
  "duration": 278526700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 21
    }
  ],
  "location": "MyStepDefs.i_enter_location_as(String)"
});
formatter.result({
  "duration": 246442500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 1 mile",
      "offset": 22
    }
  ],
  "location": "MyStepDefs.i_select_distance_as(String)"
});
formatter.result({
  "duration": 162800400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35000",
      "offset": 26
    }
  ],
  "location": "MyStepDefs.i_enter_minimum_salary_as(String)"
});
formatter.result({
  "duration": 121890300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "58000",
      "offset": 27
    }
  ],
  "location": "MyStepDefs.i_enter_maximum_salary_as(String)"
});
formatter.result({
  "duration": 153032100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 25
    }
  ],
  "location": "MyStepDefs.i_Select_salary_type_as(String)"
});
formatter.result({
  "duration": 97352600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last 28 days",
      "offset": 25
    }
  ],
  "location": "MyStepDefs.i_Select_posted_from_as(String)"
});
formatter.result({
  "duration": 107907700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.i_click_on_find_jobs()"
});
formatter.result({
  "duration": 208375800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qa Engineer",
      "offset": 32
    },
    {
      "val": "London",
      "offset": 54
    }
  ],
  "location": "MyStepDefs.i_validate_job_search_entry_as_jobs_in(String,String)"
});
formatter.result({
  "duration": 2804856300,
  "status": "passed"
});
formatter.after({
  "duration": 1492151600,
  "status": "passed"
});
formatter.before({
  "duration": 5907382800,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "User should be able to search job from search jobs titles successfully",
  "description": "",
  "id": "search-job-functionality;user-should-be-able-to-search-job-from-search-jobs-titles-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@AdvanceSearchJob"
    },
    {
      "line": 19,
      "name": "@FeatureRegression"
    },
    {
      "line": 19,
      "name": "@SearchJob"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on search jobs",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter job title as \"Qa Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "* "
});
formatter.step({
  "line": 24,
  "name": "I enter location as \"Manchester\"",
  "matchedColumns": [
    1
  ],
  "keyword": "* "
});
formatter.step({
  "line": 25,
  "name": "I select distance as \"up to 75 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.step({
  "line": 26,
  "name": "I enter minimum salary as\"2000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "* "
});
formatter.step({
  "line": 27,
  "name": "I enter maximum salary as \"3700\"",
  "matchedColumns": [
    4
  ],
  "keyword": "* "
});
formatter.step({
  "line": 28,
  "name": "I Select salary type as \"Per  month\"",
  "matchedColumns": [
    5
  ],
  "keyword": "* "
});
formatter.step({
  "line": 29,
  "name": "I Select posted from as \"Last 14 days\"",
  "matchedColumns": [
    6
  ],
  "keyword": "* "
});
formatter.step({
  "line": 30,
  "name": "I click on find jobs",
  "keyword": "* "
});
formatter.step({
  "line": 31,
  "name": "I validate job search entry as \"Qa Tester\" jobs in \"Manchester\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.i_am_on_homepage()"
});
formatter.result({
  "duration": 87900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.i_click_on_search_jobs()"
});
formatter.result({
  "duration": 3335841700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qa Tester",
      "offset": 22
    }
  ],
  "location": "MyStepDefs.i_enter_job_title_as(String)"
});
formatter.result({
  "duration": 265026600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manchester",
      "offset": 21
    }
  ],
  "location": "MyStepDefs.i_enter_location_as(String)"
});
formatter.result({
  "duration": 272538300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 75 miles",
      "offset": 22
    }
  ],
  "location": "MyStepDefs.i_select_distance_as(String)"
});
formatter.result({
  "duration": 147350000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 26
    }
  ],
  "location": "MyStepDefs.i_enter_minimum_salary_as(String)"
});
formatter.result({
  "duration": 144398000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3700",
      "offset": 27
    }
  ],
  "location": "MyStepDefs.i_enter_maximum_salary_as(String)"
});
formatter.result({
  "duration": 137175600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per  month",
      "offset": 25
    }
  ],
  "location": "MyStepDefs.i_Select_salary_type_as(String)"
});
formatter.result({
  "duration": 30185665300,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: Per  month\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027E5570\u0027, ip: \u0027192.168.0.31\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:147)\r\n\tat org.example.Utils.selectFromDropdownByVisibleText(Utils.java:26)\r\n\tat page.object.page.Home_Page.select_salary_type(Home_Page.java:54)\r\n\tat org.example.MyStepDefs.i_Select_salary_type_as(MyStepDefs.java:58)\r\n\tat ✽.* I Select salary type as \"Per  month\"(src/test/resources/features/jobserach.feature:28)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last 14 days",
      "offset": 25
    }
  ],
  "location": "MyStepDefs.i_Select_posted_from_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDefs.i_click_on_find_jobs()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Qa Tester",
      "offset": 32
    },
    {
      "val": "Manchester",
      "offset": 52
    }
  ],
  "location": "MyStepDefs.i_validate_job_search_entry_as_jobs_in(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1084300400,
  "status": "passed"
});
formatter.before({
  "duration": 5951076100,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "User should be able to search job from search jobs titles successfully",
  "description": "",
  "id": "search-job-functionality;user-should-be-able-to-search-job-from-search-jobs-titles-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@AdvanceSearchJob"
    },
    {
      "line": 19,
      "name": "@FeatureRegression"
    },
    {
      "line": 19,
      "name": "@SearchJob"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on search jobs",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter job title as \"Accounts Assistant\"",
  "matchedColumns": [
    0
  ],
  "keyword": "* "
});
formatter.step({
  "line": 24,
  "name": "I enter location as \"Leed\"",
  "matchedColumns": [
    1
  ],
  "keyword": "* "
});
formatter.step({
  "line": 25,
  "name": "I select distance as \"up to 100 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.step({
  "line": 26,
  "name": "I enter minimum salary as\"700\"",
  "matchedColumns": [
    3
  ],
  "keyword": "* "
});
formatter.step({
  "line": 27,
  "name": "I enter maximum salary as \"1200\"",
  "matchedColumns": [
    4
  ],
  "keyword": "* "
});
formatter.step({
  "line": 28,
  "name": "I Select salary type as \"per week\"",
  "matchedColumns": [
    5
  ],
  "keyword": "* "
});
formatter.step({
  "line": 29,
  "name": "I Select posted from as \"Last 7 days\"",
  "matchedColumns": [
    6
  ],
  "keyword": "* "
});
formatter.step({
  "line": 30,
  "name": "I click on find jobs",
  "keyword": "* "
});
formatter.step({
  "line": 31,
  "name": "I validate job search entry as \"Accounts Assistant\" jobs in \"Leed\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.i_am_on_homepage()"
});
formatter.result({
  "duration": 142700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.i_click_on_search_jobs()"
});
formatter.result({
  "duration": 2301808900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accounts Assistant",
      "offset": 22
    }
  ],
  "location": "MyStepDefs.i_enter_job_title_as(String)"
});
formatter.result({
  "duration": 307146500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Leed",
      "offset": 21
    }
  ],
  "location": "MyStepDefs.i_enter_location_as(String)"
});
formatter.result({
  "duration": 216200800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 100 miles",
      "offset": 22
    }
  ],
  "location": "MyStepDefs.i_select_distance_as(String)"
});
formatter.result({
  "duration": 176753700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "700",
      "offset": 26
    }
  ],
  "location": "MyStepDefs.i_enter_minimum_salary_as(String)"
});
formatter.result({
  "duration": 159871100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1200",
      "offset": 27
    }
  ],
  "location": "MyStepDefs.i_enter_maximum_salary_as(String)"
});
formatter.result({
  "duration": 148460700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "per week",
      "offset": 25
    }
  ],
  "location": "MyStepDefs.i_Select_salary_type_as(String)"
});
formatter.result({
  "duration": 30107601300,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: per week\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027E5570\u0027, ip: \u0027192.168.0.31\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:147)\r\n\tat org.example.Utils.selectFromDropdownByVisibleText(Utils.java:26)\r\n\tat page.object.page.Home_Page.select_salary_type(Home_Page.java:54)\r\n\tat org.example.MyStepDefs.i_Select_salary_type_as(MyStepDefs.java:58)\r\n\tat ✽.* I Select salary type as \"per week\"(src/test/resources/features/jobserach.feature:28)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last 7 days",
      "offset": 25
    }
  ],
  "location": "MyStepDefs.i_Select_posted_from_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDefs.i_click_on_find_jobs()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Accounts Assistant",
      "offset": 32
    },
    {
      "val": "Leed",
      "offset": 61
    }
  ],
  "location": "MyStepDefs.i_validate_job_search_entry_as_jobs_in(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1556079000,
  "status": "passed"
});
formatter.before({
  "duration": 6206090800,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "User should be able to search job from search jobs titles successfully",
  "description": "",
  "id": "search-job-functionality;user-should-be-able-to-search-job-from-search-jobs-titles-successfully;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@AdvanceSearchJob"
    },
    {
      "line": 19,
      "name": "@FeatureRegression"
    },
    {
      "line": 19,
      "name": "@SearchJob"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on search jobs",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter job title as \"Sale Assistant\"",
  "matchedColumns": [
    0
  ],
  "keyword": "* "
});
formatter.step({
  "line": 24,
  "name": "I enter location as \"Woking\"",
  "matchedColumns": [
    1
  ],
  "keyword": "* "
});
formatter.step({
  "line": 25,
  "name": "I select distance as \"up to 250 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.step({
  "line": 26,
  "name": "I enter minimum salary as\"300\"",
  "matchedColumns": [
    3
  ],
  "keyword": "* "
});
formatter.step({
  "line": 27,
  "name": "I enter maximum salary as \"500\"",
  "matchedColumns": [
    4
  ],
  "keyword": "* "
});
formatter.step({
  "line": 28,
  "name": "I Select salary type as \"per day\"",
  "matchedColumns": [
    5
  ],
  "keyword": "* "
});
formatter.step({
  "line": 29,
  "name": "I Select posted from as \"Last 3 days\"",
  "matchedColumns": [
    6
  ],
  "keyword": "* "
});
formatter.step({
  "line": 30,
  "name": "I click on find jobs",
  "keyword": "* "
});
formatter.step({
  "line": 31,
  "name": "I validate job search entry as \"Sale Assistant\" jobs in \"Woking\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.i_am_on_homepage()"
});
formatter.result({
  "duration": 67500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.i_click_on_search_jobs()"
});
formatter.result({
  "duration": 2397452400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sale Assistant",
      "offset": 22
    }
  ],
  "location": "MyStepDefs.i_enter_job_title_as(String)"
});
formatter.result({
  "duration": 382070100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Woking",
      "offset": 21
    }
  ],
  "location": "MyStepDefs.i_enter_location_as(String)"
});
formatter.result({
  "duration": 176057900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 250 miles",
      "offset": 22
    }
  ],
  "location": "MyStepDefs.i_select_distance_as(String)"
});
formatter.result({
  "duration": 147762800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "300",
      "offset": 26
    }
  ],
  "location": "MyStepDefs.i_enter_minimum_salary_as(String)"
});
formatter.result({
  "duration": 192494900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 27
    }
  ],
  "location": "MyStepDefs.i_enter_maximum_salary_as(String)"
});
formatter.result({
  "duration": 148380000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "per day",
      "offset": 25
    }
  ],
  "location": "MyStepDefs.i_Select_salary_type_as(String)"
});
formatter.result({
  "duration": 60158283200,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: per day\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027E5570\u0027, ip: \u0027192.168.0.31\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:147)\r\n\tat org.example.Utils.selectFromDropdownByVisibleText(Utils.java:26)\r\n\tat page.object.page.Home_Page.select_salary_type(Home_Page.java:54)\r\n\tat org.example.MyStepDefs.i_Select_salary_type_as(MyStepDefs.java:58)\r\n\tat ✽.* I Select salary type as \"per day\"(src/test/resources/features/jobserach.feature:28)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last 3 days",
      "offset": 25
    }
  ],
  "location": "MyStepDefs.i_Select_posted_from_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDefs.i_click_on_find_jobs()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sale Assistant",
      "offset": 32
    },
    {
      "val": "Woking",
      "offset": 57
    }
  ],
  "location": "MyStepDefs.i_validate_job_search_entry_as_jobs_in(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2441875600,
  "status": "passed"
});
formatter.before({
  "duration": 11434055200,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "User should be able to search job from search jobs titles successfully",
  "description": "",
  "id": "search-job-functionality;user-should-be-able-to-search-job-from-search-jobs-titles-successfully;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@AdvanceSearchJob"
    },
    {
      "line": 19,
      "name": "@FeatureRegression"
    },
    {
      "line": 19,
      "name": "@SearchJob"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on search jobs",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter job title as \"Finance Manger\"",
  "matchedColumns": [
    0
  ],
  "keyword": "* "
});
formatter.step({
  "line": 24,
  "name": "I enter location as \"Leicestershire\"",
  "matchedColumns": [
    1
  ],
  "keyword": "* "
});
formatter.step({
  "line": 25,
  "name": "I select distance as \"up to 750 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.step({
  "line": 26,
  "name": "I enter minimum salary as\"30\"",
  "matchedColumns": [
    3
  ],
  "keyword": "* "
});
formatter.step({
  "line": 27,
  "name": "I enter maximum salary as \"50\"",
  "matchedColumns": [
    4
  ],
  "keyword": "* "
});
formatter.step({
  "line": 28,
  "name": "I Select salary type as \"per hour\"",
  "matchedColumns": [
    5
  ],
  "keyword": "* "
});
formatter.step({
  "line": 29,
  "name": "I Select posted from as \"Last 24 hours\"",
  "matchedColumns": [
    6
  ],
  "keyword": "* "
});
formatter.step({
  "line": 30,
  "name": "I click on find jobs",
  "keyword": "* "
});
formatter.step({
  "line": 31,
  "name": "I validate job search entry as \"Finance Manger\" jobs in \"Leicestershire\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.i_am_on_homepage()"
});
formatter.result({
  "duration": 98300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.i_click_on_search_jobs()"
});
formatter.result({
  "duration": 3659804700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Finance Manger",
      "offset": 22
    }
  ],
  "location": "MyStepDefs.i_enter_job_title_as(String)"
});
formatter.result({
  "duration": 1968633000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Leicestershire",
      "offset": 21
    }
  ],
  "location": "MyStepDefs.i_enter_location_as(String)"
});
formatter.result({
  "duration": 488457700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 750 miles",
      "offset": 22
    }
  ],
  "location": "MyStepDefs.i_select_distance_as(String)"
});
formatter.result({
  "duration": 491612600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 26
    }
  ],
  "location": "MyStepDefs.i_enter_minimum_salary_as(String)"
});
formatter.result({
  "duration": 548754000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 27
    }
  ],
  "location": "MyStepDefs.i_enter_maximum_salary_as(String)"
});
formatter.result({
  "duration": 489259000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "per hour",
      "offset": 25
    }
  ],
  "location": "MyStepDefs.i_Select_salary_type_as(String)"
});
formatter.result({
  "duration": 30272608600,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: per hour\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027E5570\u0027, ip: \u0027192.168.0.31\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:147)\r\n\tat org.example.Utils.selectFromDropdownByVisibleText(Utils.java:26)\r\n\tat page.object.page.Home_Page.select_salary_type(Home_Page.java:54)\r\n\tat org.example.MyStepDefs.i_Select_salary_type_as(MyStepDefs.java:58)\r\n\tat ✽.* I Select salary type as \"per hour\"(src/test/resources/features/jobserach.feature:28)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last 24 hours",
      "offset": 25
    }
  ],
  "location": "MyStepDefs.i_Select_posted_from_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDefs.i_click_on_find_jobs()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Finance Manger",
      "offset": 32
    },
    {
      "val": "Leicestershire",
      "offset": 57
    }
  ],
  "location": "MyStepDefs.i_validate_job_search_entry_as_jobs_in(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3028577500,
  "status": "passed"
});
});