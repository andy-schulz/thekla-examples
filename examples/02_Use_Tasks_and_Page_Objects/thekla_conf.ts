import {TheklaConfig} from "@thekla/config";

export const config: TheklaConfig = {

    specs: [`dist/02_Use_Tasks_and_Page_Objects/calculator_example.js`],

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
};