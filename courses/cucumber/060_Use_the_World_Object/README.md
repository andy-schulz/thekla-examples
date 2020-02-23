---
title: The World Object
parent: Cucumber
has_children: false
nav_order: 60
---

# Using the World Object
{: .no_toc}

In order to test the calculator app we somehow have to pass the numbers or the 
result of the calculation from the ``When`` step (``When he adds the numbers 1 and 2``) to the 
``Then`` step (``Then he can see the result 3``) to actually compare the calculation result 
with the expected value.

This can be achieved with the ``World Object``.

Every Cucumber implementation (Java, Ruby, JavaScript etc.) has a slightly different approach to
model the ``World Object``, but the concept behind is always the same:

***The World Object is used to:* Share and store content between steps within a scenario**

This also means that sharing data between scenarios is not possible and should not be done as it
would lead to dependant Scenarios.
 
## Example Content

````
├─ features
|   ├─ add_numbers.feature 
├─ src
|   ├─ __step_definition__
|   |   ├─ the_world_object.js   -- the simple world object example
|   ├─ calculator
|   |   ├─ Calculator.js         -- a simple calculator implementention
````

## Sharing Data between steps

In ``cucumber-js`` the world object is realized by using the functions ``this`` context.

Just create an attribute on ``this`` and assign the value you like.

As JS is not typed you can assign any value to the attribute.

````typescript
When(`he adds the numbers {int} and {int}`, function (firstPara, secondPara) {
    this.theFirstParameter = firstPara;
    this.theSecondParameter = secondPara;

    return `success`;
});

Then('he can see the result {int}', function (result) {
    console.log(`Adding the numbers ${this.theFirstParameter} and ${this.theSecondParameter}`);
    console.log(`Should result in: ${result}`);
    
    return `success`;
});
````

executing the example with

````bash
npx cucumber-js -r src/**/the_world_object.js
````

should result in the following output:

````text
The calculator will be opend
..Adding the numbers 1 and 2
Should result in: 3
.

1 scenario (1 passed)
3 steps (3 passed)
0m00.005s

````

Before you continue please try to solve Exercise 1.

## Passing parameters from cli

``cucumber-js`` allows you to pass parameters as a JSON:

````typescript
{
    "first": 2,
    "second": 4,
    "expected": 6
}
````

via the cli option ``--world-parameters``

> As the different shells handle strings a bit different make sure you pass the JSON in the correct format.

````bash
# Windows CMD
npx cucumber-js -r src/**/the_world_parameters.js --world-parameters "{\\""first\\"":2,\\""second\\"":4,\\""expected\\"":6}"

# Windows Powershell
npx cucumber-js -r src/**/the_world_parameters.js --world-parameters '{\\"""first\\""":2,\\"""second\\""":4,\\"""expected\\""":6}'
````

Obviously passing parameters like this is nothing you would really type in manually. This is something used in an
automation environment (like Jenkins) or from a starting script.

within a step definition you can then access the parameters as follows:

````typescript
Then('he can see the result {int}', function (result) {
    console.log(`First parameter: ${this.parameters.first}`);
    console.log(`Second parameter: ${this.parameters.second}`);
    console.log(`Expected Result: ${this.parameters.expected}`);    
    return `success`;
});
````

## Exercise

1. Calculate the result from the current example and check if the result is correct. 
Fail the step in case the result does not match the expectation.
    
    Hint: 
    1. use the ``if`` statement:
        ````typescript
        if(a === b) {
           // do something if condition is met
        } else {
           // do something if condition is not met
        }
        ````
    1. you can throw an error to signal something went wrong
        ````typescript
           throw Error("my Error message")
        ````
    1. Change the values of the scenario and see what kind of results you get

1. Create a new step definition file where the step definitions are not using the 
values from the steps but using the passed parameters by using.

    Taking the example from above, the output should look like:
    
    ````text
    The calculator will be opened
    ..First parameter: 2
    Second parameter: 4
    Expected Result: 6
    .
    
    1 scenario (1 passed)
    3 steps (3 passed)
    0m00.015s
    ````