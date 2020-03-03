
To run the feature file, open up a terminal and execute the commands:

````bash
# go to the current example folder, if you already in there omit this command
cd courses/cucumber/01_Create_A_Feature_File/java

# start cucumber tests
mvn test
````

> Why not calling cucumber directly?
> Maven or Gradle are the most used ... update here

```bash

Scenario: Add positive numbers       # createfeaturefile/add_numbers.feature:5
  Given Bernhard opened a calculator # null
  When he adds the numbers 1 and 2   # null
  Then he can see the result 3       # null

Undefined scenarios:
classpath:createfeaturefile/add_numbers.feature:5# Add positive numbers

1 Scenarios (1 undefined)
3 Steps (3 undefined)
0m0,482s


You can implement missing steps with the snippets below:

@Given("Bernhard opened a calculator")
public void bernhard_opened_a_calculator() {
    // Write code here that turns the phrase above into concrete actions
    throw new io.cucumber.java.PendingException();
}

@When("he adds the numbers {int} and {int}")
public void he_adds_the_numbers_and(Integer int1, Integer int2) {
    // Write code here that turns the phrase above into concrete actions
    throw new io.cucumber.java.PendingException();
}

@Then("he can see the result {int}")
public void he_can_see_the_result(Integer int1) {
    // Write code here that turns the phrase above into concrete actions
    throw new io.cucumber.java.PendingException();
}


Tests run: 1, Failures: 0, Errors: 0, Skipped: 1, Time elapsed: 1.162 sec

Results :

Tests run: 1, Failures: 0, Errors: 0, Skipped: 1

[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  8.034 s
[INFO] Finished at: 2020-03-03T12:04:06+01:00
[INFO] ------------------------------------------------------------------------

```

In the output above Cucumber gives you a hint what you need to execute the scenario:

````bash
    You can implement missing steps with the snippets below:
    
    @Given("Bernhard opened a calculator")
    public void bernhard_opened_a_calculator() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }
    
    ...
````