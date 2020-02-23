const {Given, Then, When} = require('cucumber');

Given(`Bernhard opened a calculator`, function () {
    console.log(`
    The calculator will be opened`);
    return `success`;
});

When(`he adds the numbers`, function (table) {
    console.log(`
    Getting the RAW Data Table: 
    ${JSON.stringify(table, null, `\t`)}`);
});

When(`he adds the numbers {int} and {int}`, function (int, int2) {
    const myFirstParameter = int;
    const mySecondParameter = int2;

    console.log(`
    First Parameter ${myFirstParameter}
    Second Parameter ${mySecondParameter}`);

    return `success`;
});

Then(`he can see the result {int}`, function (int) {

    console.log(`
    Expected Result: ${int}`);

    return `success`;
});
