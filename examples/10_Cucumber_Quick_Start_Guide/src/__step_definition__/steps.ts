import { Given, When, Then } from "cucumber";
import { Actor, Sleep }             from "@thekla/core";
import { TheklaGlobal }                                      from "@thekla/config";
import {BrowseTheWeb, By, element, Navigate, RunningBrowser, Enter} from "@thekla/web-and-mobile-abilities";

declare const thekla: TheklaGlobal;

Given('Bernhard opened Site {string}', function (site: string) {
    // Write code here that turns the phrase above into concrete actions
    const Bernhard = Actor.named(`Bernhard`);

    const aBrowser = RunningBrowser
        .startedOn(thekla.serverConfig())
        .withCapabilities(thekla.capabilities());

    Bernhard.whoCan(BrowseTheWeb.using(aBrowser));

    this.bernhard = Bernhard;

    return Bernhard.attemptsTo(
        Navigate.to(site)
    )

});

When('He searches for {string}', function (searchString: string) {
    // Write code here that turns the phrase above into concrete actions

    const SEARCH_FIELD = element(By.css(`[name='q']`));

    return this.bernhard.attemptsTo(
        Enter.value(searchString)
            .into(SEARCH_FIELD)
    )
});

Then('He can see some results', function () {
    // Write code here that turns the phrase above into concrete actions

    return this.bernhard.attemptsTo(
       Sleep.for(5000)
    ).then(() => {
        RunningBrowser.cleanup()
    });
});
