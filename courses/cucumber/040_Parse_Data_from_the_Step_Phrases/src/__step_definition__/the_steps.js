const {Given, Then, When} = require('cucumber');

Given(`Bernhard opened a calculator`, function () {
    console.log(`The calculator will be opend`);
    return `success`;
});

When(`he adds the numbers {int} and {int}`, function (firstPara, secondPara) {
    console.log(`First Parameter ${firstPara}`);
    console.log(`Second Parameter ${secondPara}`);

    return `success`;
});

Then(/he can see the result (.*)/, function (result) {
    console.log(`Expected Result: ${result}`);
    return `success`;
});
