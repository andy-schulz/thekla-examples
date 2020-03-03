To run the feature file, open up a terminal and execute the commands:

````bash
# go to the current example folder, if you already in there omit this command
cd courses/cucumber/01_Create_A_Feature_File

# start cucumber
npx cucumber-js
````

> What is npx?
> cucumber-js can be installed in 2 ways, globally and locally. To not pollute your systems its best to install
> cucumber locally, meaning its installed only in the project folder (node_modules). NPX just finds and executes
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

````bash
    Undefined. Implement with the following snippet:

     Given('Bernhard opened a calculator', function () {
       // Write code here that turns the phrase above into concrete actions
       return 'pending';
     });

````

We will implement the step definitions in the next example.