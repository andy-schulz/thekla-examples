const {Given, Then, When, setWorldConstructor} = require('cucumber');
const Calculator = require("../../../060_Use_the_World_Object/src/calculator/Calculator");

const CalculatorWorldConstructor = function () {
    const calc = new Calculator();
    this.add = calc.add;
};

setWorldConstructor(CalculatorWorldConstructor);

Given(`Bernhard opened a calculator`, function () {
});

When(`he adds the numbers {int} and {int}`, function (firstPara, secondPara) {

    const result = this.add(firstPara, secondPara);

    this.first = firstPara;
    this.second = secondPara;
    this.result = result;
});

Then('he can see the result {int}', function (expected) {

    if (expected !== this.result)
        throw new Error(`adding ${this.first} to ${this.second} did not match the expectation of ${expected} but resulted in ${result}`)
});

