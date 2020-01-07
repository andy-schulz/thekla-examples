const {Given, Then, When} = require('cucumber');

Given(`We are using a data table`, function () {
    // nothing do do here ... no setup no nothing
});

Given(/We can transform the table to an object using "dataTable.hashes\(\)"/, function (dataTable) {
    const objectFromTable = dataTable.hashes();

    console.log(`
    Printing the datatable as Object (dataTable.hashes()): 
    ${JSON.stringify(objectFromTable, null, `\t`)}
    `)
});

Given(/We can transform the table to an object without headers using "dataTable.rows\(\)"/, function (dataTable) {
    const tableWithoutHeader = dataTable.rows();

    console.log(`
    Printing the datatable as Object (dataTable.rows()): 
    ${JSON.stringify(tableWithoutHeader, null, `\t`)}
    `)
});

Given(/We can transform the plain table to an object with key-value pairs using "dataTable.rowsHash\(\)"/, function (dataTable) {
    const firstColumnAsAttribute = dataTable.rowsHash();

    console.log(`
    Printing the datatable as Object (dataTable.rowsHash()): 
    ${JSON.stringify(firstColumnAsAttribute, null, `\t`)}
    `)
});

Given(/We can transform the table to plain 2D Array using "dataTable.raw\(\)"/, function (dataTable) {
    const rawDataTable = dataTable.raw();

    console.log(`
    Printing the datatable as a raw 2D array (dataTable.raw()): 
    ${JSON.stringify(rawDataTable, null, `\t`)}
    `)
});

