# A single feature file

A simple feature file consists of:

1. a feature with a feature name
1. an optional feature description
1. a scenario with a scenario name
1. an optional scenario description
1. the scenario steps starting with Given, When, Then


```gherkin
# Comments to a feature file can be added by preceding the line with #
# A Feature as marked with the keyword Feature: followed by the feature name
Feature: Add two Numbers

  # you can add a feature description, which is following the line with the Feature keyword and before the Scenario: 
  The "calculator" can add two numbers

  # A scenario is described with the keyword Scenario: followed by the scenario description
  Scenario: Add positive numbers
    
    # To further describe the scenario you can add a description directly following the Scenario: keyword.
    The calculator should be able to add two positive numbers
    
    # The scenario steps start with the keywords Given, When, Then followed by the step description
    Given Bernhard opened a calculator
    When he adds the numbers 1 and 2
    Then he can see the result 3
```

## Folder Structure

Features are stored in a folder called ``features``

If you check the current directory it should look like this:

````
features
    -> add_numbers.feature  .... the feature file

README.md                   .... this README file
````

This is all you need to start execution your first feature

## Execution

To start execution the feature file open up a terminal and execute the commands:

````bash
# go to the current example folder, if you already in there omit this command
cd courses/cucumber/01_Create_A_Feature_File

# start cucumber
npx cucumber-js
````

> What is npx?
> 
> cucumber-js can be installed in 2 ways, globally and locally. To not pollute your systems its best to install
> cucumber locally, meaning its installed only in this project folder (node_modules). NPX just finds and executes
> the cucumber-js start script in your node_modules folder, so you dont have to find it yourself or set any PATH variables.
> See the [npx documentation](https://www.npmjs.com/package/npx) for further details.

```bash

UUU

Warnings:

1) Scenario: Add positive numbers # examples\10_Cucumber_Quick_Start_Guide\01_Create_A_Feature_File\features\add_numbers.feature:5
   ? Given Bernhard opened a calculator
       Undefined. Implement with the following snippet:

         Given('Bernhard opened a calculator', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

   ? When he adds the numbers 1 and 2
       Undefined. Implement with the following snippet:

         When('he adds the numbers {int} and {int}', function (int, int2) {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

   ? Then he can see the result 3
       Undefined. Implement with the following snippet:

         Then('he can see the result {int}', function (int) {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });


1 scenario (1 undefined)
3 steps (3 undefined)
0m00.000s

```

At the top of the output you see the following character sequence `UUU`.

* `U` - the found step is undefined, no step implementation could be found.

As you specified three steps in the scenario the character sequence is three characters long.

In addition cucumber even gives you a hint what you need to do to execute the scenario:

````
    Undefined. Implement with the following snippet:
    
     Given('Bernhard opened a calculator', function () {
       // Write code here that turns the phrase above into concrete actions
       return 'pending';
     });

````

We will implement the step definitions in the next example.

# Exercises

1. Add a new step to the scenario and check the output after feature execution
1. Create new feature to subtract positive numbers from each other
    * start cucumber and check the output
    * make sure cucumber executes your new feature file



[Next: Create your first step definition](../02_Create_The_Step_Definition/README.md)