const {Builder, By} = require('selenium-webdriver');


async function search_google() {

    // create a new session
    // /session request
    let driver = await new Builder()
        .forBrowser('firefox')
        .usingServer('http://localhost:4444/wd/hub')
        .build();
}

search_google().catch((e) => {
    console.log(e);
});