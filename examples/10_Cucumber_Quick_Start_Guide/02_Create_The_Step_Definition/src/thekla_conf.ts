import {TheklaConfig} from "@thekla/config";

export default {

    specs: ["./features/*.feature"],

    testFramework: {
        frameworkName: "cucumber",
        cucumberOptions: {
            require: [
                `dist/step_definition/**/*.js`
            ]
        }
    }

} as TheklaConfig