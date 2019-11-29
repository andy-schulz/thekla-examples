# Parse Data from a Cucumber Step Phrase

## Using Simple Expressions

In the [First Feature] example ``cucumber-js`` did not find any step definitions and advised you
to implements the following steps:

> The output is shortend for brevity

````
    Given('Bernhard opened a calculator', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
    });
    
    
    When('he adds the numbers {int} and {int}', function (int, int2) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
    });
    
    
    Then('he can see the result {int}', function (int) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
    });

````

In the ``When`` step cucumber already assumed that the two numbers int the phrase
````gherkin
When he adds the numbers 1 and 2
````

should be a parameterized, and added the {int} and {int2} to the phrase and passed it
to the function:

````javascript
 function (int, int2) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
    }
````

now we are able to use the parameter from the step phrase in our function:

````javascript
When(`he adds the numbers {int} and {int}`, function (int, int2) {
    const myFirstParameter = int;
    const mySecondParameter = int2;
    console.log(`First Parameter ${myFirstParameter}`);
    console.log(`Second Parameter ${mySecondParameter}`);

    return `success`;
});
````

Check out the [Cucumber Expressions](https://cucumber.io/docs/cucumber/cucumber-expressions/)
for a detailed explanation on how to parse data from a cucumber step phrase.

## Using Regular Expressions

A second approach is to map the phrase and parse data from the prase is 
by using regular expressions.

````javascript
Then(/^he can see the result (.*)$/, function (result) {
    console.log(`Expected Result: ${int}`);
    return `success`;
});
````

Here the phrase is not put in quotes but in ``/.../``. I will not explain regular expressions 
here, as it is a topic of its own, but with a simple regular expression as listed above
a lot if not most of your phrases can be maped and parsed.

* ``/.../`` - denotes a regular expression
* ``^`` - matches the beginning of a string
* ``$`` - matches the end of a string
* ``(.*)`` - matches all characters that follow after 'he can see the result '

The extractions will be passed as parameters in the order they appear in the regular expression.

As we just have one ``(.*)`` only one parameter (result) is passed to the function:

````javascript
function (result) {...}
````

If you need a more detailed explanation checkout [wikipedia](https://en.wikipedia.org/wiki/Regular_expression)
as a first overview and then go to [www.regular-expressions.info](https://www.regular-expressions.info/)
which holds a whole lot of information.

If you want to test you regular expression first before using it in your
step definitions go to [RegExr.com](https://regexr.com/).

# Exercises
1. Extract the name Bernhard from the Given phrase with a string expression and a regular expression
    * Hint: Put the name in quotes and see what cucumber suggests.
    * Print the name to the console.
1. Make the Name Bernhard Optional in the Given step, it should work with:
    ````gherkin
    Given Bernhard opened a calculator
    # or
    Given I opened a calculator
    # or 
    Given opened a calculator
    ````
1. Create an alias 'He' for the name Bernhard, it should work with:
    ````gherkin
    Given Bernhard opened a calculator
    # or
    Given He opened a calculator
    # but it should not work with
    Given Heidi opened a calculator
    ````


