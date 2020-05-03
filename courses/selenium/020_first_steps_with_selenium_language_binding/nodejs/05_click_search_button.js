const {Builder, By} = require('selenium-webdriver');


async function search_google() {

    let driver = await new Builder()
        .forBrowser('firefox')
        .usingServer('http://localhost:4444/wd/hub')
        .build();

    // open google search page
    await driver.get("https://google.com");

    // enter search text into search field
    const input_field = await driver.findElement(By.name('q'));
    await input_field.sendKeys('Software Test Automation');

    // click search button
    const search_button = await driver.findElement(By.css('[name=btnK]'));
    await search_button.click();

    // wait for 10 seconds
    await driver.sleep(10000);

    // close the browser
    await driver.quit();
}

search_google().catch((e) => {
    console.log(e);
});