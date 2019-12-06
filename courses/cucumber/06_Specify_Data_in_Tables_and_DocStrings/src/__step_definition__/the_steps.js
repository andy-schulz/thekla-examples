const {Given, Then, When} = require('cucumber');

Given(`Bernhard opened a calculator`, function () {
    console.log(`The calculater will be opend`);
    return `success`;
});

When(`he adds the numbers`, function (table) {
    console.log(table);
});

When(`he adds the numbers {int} and {int}`, function (int, int2) {
    const myFirstParameter = int;
    const mySecondParameter = int2;

    console.log(`First Parameter ${myFirstParameter}`);
    console.log(`Second Parameter ${mySecondParameter}`);

    return `success`;
});

Then(/he can see the result (.*)/, function (int) {
    console.log(`Expected Result: ${int}`);
    return `success`;
});
