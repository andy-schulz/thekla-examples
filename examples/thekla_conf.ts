import {TheklaConfig} from "@thekla/config";

export default {

    specs: [`dist/**/*_[Ss]pec.js`],

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

    restConfig: {
        requestOptions: {
            resolveWithFullResponse: false,
            proxy: process.env.REQUEST_PROXY ? process.env.REQUEST_PROXY : ``,
        }
    },

    testFramework: {
        frameworkName: `jasmine`,
        jasmineOptions: {
            defaultTimeoutInterval: 20 * 1000
        }
    }
} as TheklaConfig