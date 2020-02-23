---
title: The Test Object
parent: Cucumber
has_children: false
nav_order: 50
---

# Introducing the Calculator Test Object

Now that we are able to parse data from our steps we can introduce our simple test 
calculator we will now be using.


## Example Content

````
├─ features
|   ├─ add_numbers.feature 
├─ src
|   ├─ __step_definition__
|   |   ├─ using_the_test_object.js  -- step definition using the calculator test object
|   ├─ calculator
|   |   ├─ Calculator.js             -- a simple calculator implementention
````


## The calculator

Our test object will just be a simple Calculator class with (as of now) a single ``add()`` method
accepting out two parameters.

````javascript
class Calculator {

    add(firstNumber, secondNumber) {
        return firstNumber + secondNumber
    }
}

module.exports = Calculator;
````

The ``module.exports = Calculator`` just exports our class. It can now be used in our step definition.

Our test object is located under ``src/calculator/Calculator.js``

To use the Calculator we have to import it into our step definition file ``using_the_test_object.js``.

````javascript
const Calculator = require("./../calculator/Calculator");
````

Now we are ready to use the test object in our when step.

````javascript
When(`he adds the numbers {int} and {int}`, function (firstPara, secondPara) {
    const calculator = new Calculator();
    const result = calculator.add(firstPara, secondPara);

    console.log(`Adding ${firstPara} to ${secondPara} with my calculator is giving me ${result}`);

    return `success`;
});
````

Executing the feature with:

````bash
npx cucumber-js -r src
````

should give you the following output:

````text
.Adding 1 to 2 with my calculator is giving me 3
..

1 scenario (1 passed)
3 steps (3 passed)
0m00.004s
````

## Exercise

1. Change the parameters from numbers to string and see what happens to the output. 
Can you explain the observed behaviour?
    
    Hint:
    
    You should get the following output:
    
    ````text
    .Adding 1 to 2 with my calculator is giving me 12
    ..
    
    1 scenario (1 passed)
    3 steps (3 passed)
    0m00.002s
    ````
    
1. Check the parameters type and throw an error in case the passed parameter is not a number.
    
    Hint
    
    1. Use the [typeof operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
    
    
## Whats missing?

As of now we are not able to compare the calculators result to our expected value passed to the ``then`` step. 
For this to happen we are now introducing the [World Object].