---
title: Separate Steps and Features
parent: Cucumber
has_children: false
nav_order: 30
---

# Separate Steps and Features
{: .no_toc}

## Example Content

````
├─ features
|   ├─ all my *.feature files organised in folders
├─ src
|   ├─ __step_definition__
|   |   ├─ all my javascript *.js step definitions files organised in folders
````

[check the source](https://github.com/andy-schulz/thekla-examples/tree/master/courses/cucumber/03_Separate_the_Steps_from_the_Features)

## Separating the Step Definitions from the Feature Files

I dont like having the step definitions mixed within the features folder. 

I like to have the step definition under a src folder and not mixed with the features 
(see folder structure above)

When you run

````bash
npx cucumber-js
````

The same error message is thrown as in the [First Feature](../01_Create_A_Feature_File/README.md) example,
as the step definitions cant be found by cucumber, it will only search in the features
folder by default.

````bash

UUU

Warnings:

1) Scenario: Add positive numbers # features\add_numbers.feature:5
   ? Given Bernhard opened a calculator
       Undefined. Implement with the following snippet:

         Given('Bernhard opened a calculator', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

...
````

To instruct cucumber to search in a different folder you specify the folder 
by using the ``--require`` option.

````bash
npx cucumber-js --require src/__step_definition__/**/*.js
````

Now ``cucumber-js`` is able to find the step definitions again a prints out
the correct message:

````bash
P--

Warnings:

1) Scenario: Add positive numbers # features\add_numbers.feature:5
   ? Given Bernhard opened a calculator # src\__step_definition__\the_steps.js:3
       Pending
   - When he adds the numbers 1 and 2 # src\__step_definition__\the_steps.js:8
   - Then he can see the result 3 # src\__step_definition__\the_steps.js:13

1 scenario (1 pending)
3 steps (1 pending, 2 skipped)
0m00.001s

````

## Exercises

1. Spread the three Given, When and Then functions across 3 files and place them 
in the following files ``src/given/given.js``, ``src/when/when.js`` and ``src/then/then.js``.
    * start cucumber with the right parameter so that the step definitions can be found
