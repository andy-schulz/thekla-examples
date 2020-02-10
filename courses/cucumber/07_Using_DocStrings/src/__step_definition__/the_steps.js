const {Given, Then, When} = require('cucumber');

Given(`Bernhard opened a calculator`, function () {
    console.log(`The calculator opens`);
});

Given(`he summed up the nummbers`, function (table) {
    const calculations = table.hashes();
    console.log(calculations);
});

When('he saves the calculation to a file', function () {
    // Write code here that turns the phrase above into concrete actions

});

Then('he can see the file containing', function (docString) {
    // Write code here that turns the phrase above into concrete actions

});