const {Given, Then, When} = require('cucumber');

Given(`Bernhard opened a calculator`, function () {
    console.log(`The calculator will be opend`);
    return `success`;
});

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