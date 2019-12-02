---
title: Create a Step Definition
parent: Cucumber
has_children: false
nav_order: 20
---

# The first step definition

To automate a scenario "step definitions" which act as glue between gherkin and the automation framework.

The Scenario stays unchanged, we are adding 2 positive numbers.

```gherkin
Feature: Add two Numbers

  The "calculator" can add two numbers

  Scenario: Add positive numbers
    Given Bernhard opened a calculator
    When he adds the numbers 1 and 2
    Then he can see the result 3
```

In the former example we just hat a simple feature file cucumber was able to execute. the error message said, that 
steps were not implemented.

Gherkin is automatically looking for the step definitions in a folder called ``step_definition``. Inside the step definition
folder the actual step definitions are located in one or more js-files.

Check the current folder and see that the following structure exists:

````
features
    -> add_numbers.feature
    -> step_definition
        -> the_steps.js
````

The `the_steps.js` file then implements the following functions as follows:

```javascript

const {Given, Then, When} = require('cucumber');

Given(`Bernhard opened a calculator`, function () {
    // Write code here that turns the phrase above into concrete actions
    return `success`;
});

When(`he adds the numbers {int} and {int}`, function (int, int2) {
    // Write code here that turns the phrase above into concrete actions
    return `pending`;
});

Then(`he can see the result {int}`, function (int) {
    // Write code here that turns the phrase above into concrete actions
    return `pending`;
});

```

The `Given`, `When`, and `Then` functions define the steps to look for and a function to execute for this step.



## Execute

Open a terminal and start the scenario as follows

````bash
# go to the example folder
cd courses/cucumber/02_Create_The_Step_Definition

# start cucumber
npx cucumber-js
````

See the following result in the Terminal:

```bash
.P-

Warnings:

1) Scenario: Add positive numbers # examples\10_Cucumber_Quick_Start_Guide\02_Create_The_Step_Definition\features\add_numbers.feature:5
   √ Given Bernhard opened a calculator # examples\10_Cucumber_Quick_Start_Guide\02_Create_The_Step_Definition\features\step_definition\the_steps.js:3
   ? When he adds the numbers 1 and 2 # examples\10_Cucumber_Quick_Start_Guide\02_Create_The_Step_Definition\features\step_definition\the_steps.js:8
       Pending
   - Then he can see the result 3 # examples\10_Cucumber_Quick_Start_Guide\02_Create_The_Step_Definition\features\step_definition\the_steps.js:13

1 scenario (1 pending)
3 steps (1 pending, 1 skipped, 1 passed)
0m00.002s

```

At the top of the output you see the following character sequence `.P-`.

It has the following meaning

* ``.`` - step is successful
* ``P`` - step is pending, 
* ``-`` - step was skipped, the preceding step was not successful
 


# Exercises

1. change the status of each step so that the given scenario is executed successfully
2. make the second step fail and observe the result in the terminal
3. create a feature and a scenario describing the subtraction of two numbers

[Next: Separate the step definition for the features](../03_Separate_the_Steps_from_the_Features/README.md)