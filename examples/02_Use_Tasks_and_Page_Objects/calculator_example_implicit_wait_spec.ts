import * as Conf                                                                     from "@thekla/config";
import {Actor, Expected, See}                                                        from "@thekla/core";
import {
    BrowseTheWeb,
    Click,
    Enter,
    Key,
    Navigate,
    RunningBrowser,
    Text
}                                                                                    from "@thekla/web-and-mobile-abilities";
import {getLogger}                                                                   from "log4js"
import {CALCULATOR_INPUT_NO_WAIT, GOOGLE_SEARCH_FIELD_NO_WAIT, GOOGLE_SUBMIT_BUTTON} from "./elements/GoogleSearch";
import {Add}                                                                         from "./tasks/Add";

declare const thekla: Conf.TheklaGlobal;

const logger = getLogger(`DocSppExamples`);

describe(`Using Google Search to find an online calculator`, (): void => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 40000;

    logger.trace(`Start Google Search test`);

    beforeAll(() => {
    });

    describe(`with the screenplay pattern implementation,`, (): void => {
        // define your actor
        const philipp = Actor.named(`Philipp`);

        beforeAll((): void => {
            // and give him the ability to browse the web using a browser of your choice
            const aBrowser = RunningBrowser
                .startedOn(thekla.serverConfig())
                .withCapabilities(thekla.capabilities());

            philipp.whoCan(BrowseTheWeb.using(aBrowser));
        });

        it(`the google calculator should be loaded 
        - (test case id: ee1fcbb5-eb08-4f0d-979b-601ba9b63d87)`, async (): Promise<void> => {
            return philipp.attemptsTo(
                Navigate.to(`http://www.google.com`),
                Enter.value(`calculator`).into(GOOGLE_SEARCH_FIELD_NO_WAIT),
                Enter.value(Key.TAB).into(GOOGLE_SEARCH_FIELD_NO_WAIT),
                Click.on(GOOGLE_SUBMIT_BUTTON),

                See.if(Text.of(CALCULATOR_INPUT_NO_WAIT))
                   .is(Expected.toEqual(`0`)),

                Add.number(1).to(20),

                See.if(Text.of(CALCULATOR_INPUT_NO_WAIT))
                   .is(Expected.toEqual(`21`))
            )
        });
    });

    afterAll(async (): Promise<void[]> => {
        // close all Browsers which were created during the test
        return RunningBrowser.cleanup();
    })
});

