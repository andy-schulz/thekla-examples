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