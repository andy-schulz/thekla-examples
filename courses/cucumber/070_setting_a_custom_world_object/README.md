---
title: The custom World Object
parent: Cucumber
has_children: false
nav_order: 70
---

# Override the default World Object with your custom World Object

Cucumber offers the possibility to create your own custom world object so that you can pass any variable or
helper function to your scenarios.

## Example Content

````
├─ features
|   ├─ add_numbers.feature 
├─ src
|   ├─ __step_definition__
|   |   ├─ the_world_object.js    -- the step definition with a custom world object
|   ├─ calculator
|   |   ├─ Calculator.js          -- a simple calculator implementention
````

## Set the custom World Object

To override the default default world object cucumber provides the ``setWorldConstructor`` method.

````javascript
const {setWorldConstructor} = require('cucumber');

setWorldConstructor(TheWorldConstructor);
````

The world constructor is a simple function preparing the test for you.

````javascript
const TheWorldConstructor = function() {
    // initialize all preparations here
}
````

The function will be called before each scenario so that each scenario gets a "fresh" world object
and no data or change of data is passed from one scenario to another.

In our case we are creating our calculator inside the function and defining a ``add()`` function,
which in turn just calls the calculator function.

````javascript
const CalculatorWorldConstructor = function () {
    const calc = new Calculator();
    // the exposed this.add function is the calculators add function
    // you can change the name of the exposed function to whatever you like
    this.add = calc.add;
};
````

As the world object is shared between all steps of a scenario you can now access the ``add()`` method with

````javascript
When(`he adds the numbers {int} and {int}`, function (firstPara, secondPara) {

    const result = this.add(firstPara, secondPara);

    // pass the parameter and the result to the next steps
    this.first = firstPara;
    this.second = secondPara;
    this.result = result;
});
````

the parameters ``firstParam`` and ``secondParam`` are passed to the calculators ``add()`` function. To compare the
result to the expected value all parameters and the result will be passed through the world object to the next step.

````javascript
Then('he can see the result {int}', function (expected) {

    if (expected !== this.result)
        throw new Error(`adding ${this.first} to ${this.second} did not match the expectation of ${expected} but resulted in ${result}`)
});
````

When executing the scenario with:

````bash
npx cucumber-js -r src
````

It should output:

````text
...

1 scenario (1 passed)
3 steps (3 passed)
0m00.001s

````

All three steps were executed successful.

## Exercise

1. Change the world constructors ``add()`` function to ``myAddFunction()``
    
    Hint:
    
    Dont change the Calculator, only change the world constructor.

1. Add two variables to the world constructor and assign the 2 parameters from the ``when`` step to those variables.
Further add a method ``testAdd()`` to the world constructor which is calling the calculators
add method with the two passed parameters from before.

    Hint:
    
    The main task is to change the calculator.
    
    The only change to the step definition is instead of using the add() function with the two parameters
    you should just call the testAdd() function.
    
    ````javascript
        Then('he can see the result {int}', function (expected) {
        
            const result = this.testAdd();
        
            if(expected !== result)
                throw new Error(`adding ${this.first} to ${this.second} did not match the expectation of ${expected} but resulted in ${result}`)
        });
    ````
