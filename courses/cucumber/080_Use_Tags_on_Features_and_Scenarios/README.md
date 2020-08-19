---
title: Using Tags
parent: Cucumber
has_children: false
nav_order: 80
tabbed: true
---

# Using Tags
{: .no_toc}

## Example Content

```text
├─ features
|   ├─ 01_add_numbers.feature
|   |         /* multiple scenarios demonstration the use of tags */
├─ src
|   ├─ __step_definition__
|   |   ├─ the_steps.js
                /* step definition for the tagged addition examples */
```

[check the source](https://github.com/andy-schulz/thekla-examples/tree/master/courses/cucumber/05_Use_Tags_on_Features_and_Scenarios)

## Why using tags

Tags are a way to add additional information and to organize your features and scenarios.

Tags start with an ``@`` and is followed by any number of characters. They are placed
directly above the ``Feature`` and / or ``Scenario`` keywords.

> The example is shortened for clarity, check the code to see the full example.

````gherkin
@BasicArithmetic
Feature: Add two Numbers

  The "calculator" can add two numbers

  @Positive
  Scenario: Add positive numbers
  # ...

  @Negative
  Scenario: Add negative numbers
  # ...

  @Positive @Negative
  Scenario: Add positive and negative numbers
  # ...
````

As you can see the the feature has the tag ``@BasicArithmetic``. In case you are writing
features for subtraction and multiplication, you could assign the same tag, as those calculations
are as well basic calculations. All Scenarios in the feature file are now tagged with ``@BasicArithmetic``.

On the other hand a square root could get the tag ``@HigherOrderArithmetic`` as it does not belong to the four
basic arithmetic operations.

The same tagging strategy can be applied to the individual scenarios.

In the example three scenarios are created and marked with tags:

1. Adding only positive numbers (``@Positive``)
2. Adding only negative numbers (``@Negative``)
3. Adding a positive to a negative number (``@Positive`` and ``@Negative``)

So then what are the tags good for?

First they represent a nice feature to categorize your elements and give your information without reading
the each and every feature description and scenario.

Second your are able to execute features based on the given tags. Which comes in handy in case you want to create a
``@SmokeTest`` test suite.

## Filter executed scenarios by tags

A tag can be specified by passing the ``--tags`` option

1. Execute all ``@BasicArithmetic`` scenarios

    ````bash
    # works in linux shall and windows powershell and CMD
    npx cucumber-js --require src/__step_definition__/**/*.js --tags @BasicArithmetic
   
    # there are differences in string handling in windows powershell and cmd
    
    # pass a string in powershell
    npx cucumber-js --require src/__step_definition__/**/*.js --tags '\"@BasicArithmetic\"'
    
    pass a string in CMD
    npx cucumber-js --require src/__step_definition__/**/*.js --tags "\"@BasicArithmetic\""
    ````

   should result in the following output

   ````bash
    ..Executed Scenario with Expected Result: 3
    ...Executed Scenario with Expected Result: -3
    ...Executed Scenario with Expected Result: -1
    .

    3 scenarios (3 passed)
    9 steps (9 passed)

    ````

   All three scenarios were executed.

1. Execute all ``@Positive`` scenarios

    ````bash
    npx cucumber-js --require src/__step_definition__/**/*.js --tags @Positive
    ````

   should result in the following output

    ````bash
    ..Executed Scenario with Expected Result: 3
    ...Executed Scenario with Expected Result: -1
    .

    2 scenarios (2 passed)
    6 steps (6 passed)

    ````

## Exercises

1. Write a feature Square Root with one scenario and tag the feature as @HigherOrderArithmetic
    * now execute only just create feature
1. Execute the scenario where two positive numbers are added, make sure only one scenario was executed
    * first try to guess how to write those tag expressions, its not difficult
    * If you can't think of a solution, have a look at [tag expressions](https://cucumber.io/docs/cucumber/api/#tag-expressions)
    * Remember:
        * passing strings to powershell ``--tags '\"PUT MY EXPRESSION HERE\"'``
        * passing strings to cmd ``--tags "\"PUT MY EXPRESSION HERE\""``
1. Execute tests which dont add any positive numbers.
    * try to guess the tag expression again, otherwise you can get hints in the documentation listed before.
