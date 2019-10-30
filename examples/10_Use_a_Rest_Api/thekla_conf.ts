import {TheklaConfig} from "@thekla/config"

export const config: TheklaConfig = {

    specs: [`dist/10_Use_a_Rest_Api/use_the_math_api_spec.js`],

    testFramework: {
        frameworkName: `jasmine`,
        jasmineOptions: {
            defaultTimeoutInterval: 10 * 1000
        }
    },

    restConfig: {
        requestOptions: {
            resolveWithFullResponse: false,
            proxy: process.env.REQUEST_PROXY ? process.env.REQUEST_PROXY : ``,
        }
    }
};