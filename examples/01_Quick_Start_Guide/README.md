---
title: Quick Start
parent: --- Code Examples ---
has_children: false
nav_order: 10
---

# Quick Start Guide using Thekla with Jasmine
{: .no_toc}

1. TOC
{:toc}

The simplest test consists of two files, the configuration file and the test specification file.

````shell script
|-- thekla_conf.ts
|-- google_search_spec.ts
````

## Configuration

````javascript
import {TheklaConfig} from "@thekla/config";

export default {

    specs: [`dist/01_Quick_Start_Guide/google_search_spec.js`],

    serverConfig: {

        automationFramework: {
            logLevel: `silent`
        },

        serverAddress: {
            hostname: `localhost`,
            port: 4444,
            protocol: `http`,
            path: `/wd/hub`
        }
    },

    capabilities: {
        browserName: `chrome`
    },

    testFramework: {
        frameworkName: `jasmine`,
        jasmineOptions: {
            defaultTimeoutInterval: 20 * 1000
        }
    }
} as TheklaConfig

````

The Config contains:

1. ``specs`` - the location of the test files, you can use glob if you want to run all files in a folder
1. ``serverConfig`` - specifies the Selenium server address and the log level of the underlying WebdriverIO
1. ``capabilities`` - the browser to use
1. ``testFramework`` - the test framework to use (jasmine and cucumber are currently implemented)

## Test Specification (spec)

Please read the [Jasmine Docs](https://jasmine.github.io/tutorials/your_first_suite) if you are not familiar
with Jasmine. 

````javascript
import * as Conf                     from "@thekla/config";
import {Actor, Sleep, See, Expected} from "@thekla/core";
import {RunningBrowser, SppElement, BrowseTheWeb, element, By, UntilElement, Navigate, Enter, Value}
                                     from "@thekla/web-and-mobile-abilities";

// declare thekla, its global
declare const thekla: Conf.TheklaGlobal;

describe(`Search on Google with thekla`, function () {
    let googleSearchField: SppElement;
    let jonathan: Actor;

    beforeAll(() => {

        // create a browser with the configuration
        const aBrowser = RunningBrowser
            // get the server config from theklas config file
            .startedOn(thekla.serverConfig())
            // get the capabilities from theklas config file
            .withCapabilities(thekla.capabilities());

        // create the actor and give it a name
        jonathan = Actor.named(`Jonathan`);

        // specify what your actor can do.
        // In this case he can use a web browser with the browser created before.
        jonathan.can(BrowseTheWeb.using(aBrowser));

        // create the search field and give it a name.
        // 1. locate the element by css
        googleSearchField = element(By.css(`[name='q']`))
        // 2. name the element
            .called(`The Google search field`)
            // wait for the element if its not there right away
            .shallWait(UntilElement.is.visible.forAsLongAs(1000));
    });

    it(`should fill the search field with a text`, async function () {

        await jonathan.attemptsTo(
            // Go to Google
            Navigate.to(`https://www.google.com/`),
            // send the search text to the search field
            Enter.value(`software test automation`)
                .into(googleSearchField),
            // Wait for 5 Seconds (just to visually follow the test case)
            Sleep.for(5 * 1000).because(`I want to visually see the content of the search field`),
            // check if the text was entered
            See.if(Value.of(googleSearchField))
                .is(Expected.toBe(`software test automation`))
        )

    });

    afterAll((): Promise<void[]> => {
        // cleanup all created browser when you are done
        return RunningBrowser.cleanup();
    });
});
````

The Test is split in three parts:

1. Preparation (`beforeAll(...)`)
    * [Create an Actor](https://andy-schulz.github.io/thekla/basics/ACTOR.html) with ``Actor.named(...)``
    * Create a Browser instance with ``RunningBrowser.startedOn(...).withCapabilities(...)``
    * Assign the browser instance to the ability (``BrowseTheWeb.using(...)``) and then assign the ability 
    to the actor ``jonathan.can(BrowseTheWeb ...)``

1. Test Execution  (`it(...)`)
    * [Open the Page](https://andy-schulz.github.io/thekla/reference/web_and_mobile/INTERACTIONS.html#navigate) 
    with ``Navigate.to(..)``
    * [Enter](https://andy-schulz.github.io/thekla/reference/web_and_mobile/INTERACTIONS.html#enter) 
    a value into the search field
    * [Sleep](https://andy-schulz.github.io/thekla/reference/basics/INTERACTIONS.html#sleep) 
    for five seconds, that the user can see that something happened on the browser instance
    * Check / [See](https://andy-schulz.github.io/thekla/reference/basics/INTERACTIONS.html#see) 
    that the Text was entered 

1. Tear Down (`afterAll(...)`)
    * ``RunningBrowser.cleanup()`` closes all open browsers.

## Execute the test from command line

When installing the packages with ``npm install `` the typescript compiler transpiles the ts-files (spec and config)
file into the dist folder.

The test can be started directly by passing the transpiled conf to thekla.

````shell script
npx thekla dist/01_Quick_Start_Guide/thekla_conf.js
````
> npx is searching for the thekla binary in the PATH and the local installation. 

Or the test can be started by using the npm script:

````shell script
npm run example:01
````

