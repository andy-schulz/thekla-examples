import {TheklaConfig} from "@thekla/config";

export default {

    specs: [`features/**/*.feature`],

    serverConfig: {
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
        frameworkName: `cucumber`,
        cucumberOptions: {
            require: [
                `dist/10_Cucumber_Quick_Start_Guide/src/__step_definition__/**/*.js`
            ]
        }
    }

} as TheklaConfig