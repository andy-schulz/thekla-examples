const {Given, Then, When} = require('cucumber');
const Calculator = require("./../calculator/Calculator");


Given(`Bernhard opened a calculator`, function () {
    return `success`;
});

When(`he adds the numbers {string} and {string}`, function (firstPara, secondPara) {
    const calculator = new Calculator();
    const result = calculator.add(firstPara, secondPara);

    console.log(`Adding ${firstPara} to ${secondPara} with my calculator is giving me ${result}`);

    return `success`;
});

Then('he can see the result {int}', function (result) {
    return `success`;
});