const {Builder, By} = require('selenium-webdriver');


async function search_google() {

    // create a new session
    // /session request
    let driver = await new Builder()
        .forBrowser('firefox')
        .usingServer('http://localhost:4444/wd/hub')
        .build();

    // load Google search site
    // /session/:SessionId/url request
    await driver.get('https://www.google.com');

    // identify search field
    // /session/:SessionId/element request
    const input_field = await driver.findElement(By.name('q'));

    // enter text into the search field
    // /session/:SessionId/element/:ElementId/value request
    await input_field.sendKeys('Software Test Automation');

    // identify search button
    // /session/:SessionId/element
    const search_button = await driver.findElement(By.css('[name=btnK]'));

    // click the search button
    // /session/:SessionId/element/:ElementId/click
    await search_button.click();

    // to see that the search was successful, the test waits for 10000
    await driver.sleep(10000);

    // close the browser
    await driver.quit();
}

search_google().catch((e) => {
    console.log(e);
});