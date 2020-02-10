const {Given, Then, When} = require('cucumber');

Given(`Bernhard opened a calculator`, function () {
    return `success`;
});

When(`he adds the numbers {int} and {int}`, function (int, int2) {
    const myFirstParameter = int;
    const mySecondParameter = int2;
    return `success`;
});

Then(`he can see the result {int}`, function (int) {

    console.log(`
    Executed Scenario with Expected Result: ${int}`);

    return `success`;
});

Given(`a step definition with no usage`, function () {

});
