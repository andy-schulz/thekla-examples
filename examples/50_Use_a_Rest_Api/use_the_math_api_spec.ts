import * as Conf                                                                      from "@thekla/config";
import {Actor, See, Expected}                                                         from "@thekla/core";
import {ExecutingRestClient, UseTheRestApi, On, request, Get, Send, Method, Response} from "@thekla/rest-abilities";

declare const thekla: Conf.TheklaGlobal;

describe(`The MathJS API to add numbers shall be executed by Martha`, () => {
    // create the actor
    const Martha = Actor.named(`Martha`);
    // create a simple request
    // the different requests could be stored in workflow objects like web elements are stored in page objects
    const mathApiRequest = request(On.resource(`http://api.mathjs.org/v4/?expr=2*(7-3)`));

    beforeAll(() => {
        // create a rest client, the current implementation uses the nodejs 'request' module
        // the rest client config is take from the thekla_conf.ts configuration
        // right now its empty, as for a very simple request nothing has to be configured
        const theRestClient = ExecutingRestClient.from(thekla.restConfig());

        // give Martha the ability to use the just created API
        Martha.can(UseTheRestApi.with(theRestClient));
    });

    it(`and the result is checked with Jasmine matcher
    - (test case id: fa78ae96-1aba-4803-84ef-bda90583855d)`, async () => {

        // now Martha can execute the request and store the value into the result array
        const result = await Get.from(mathApiRequest).performAs(Martha);

        expect(result.body).toEqual(`8`);

    });

    it(`in the "Actor.attemptsTo()" style and the result is checked with Jasmine matcher
    - (test case id: c8fe1887-0154-4602-b17e-e2c21797a152)`, async () => {
        // Or do it in a general SendMyRequest Way

        // create a container to push the result to, in this case just an array
        const result: string[] = [];
        // save response function the result from the request into the array
        const to = (resultContainer: string[]) => (actual: any) => resultContainer.push(actual);

        await Martha.attemptsTo(
            Send
                .the(mathApiRequest)
                .as(Method.get())
        );

        expect(result[0]).toBe(`8`);
    });

    it(`and getting and checking the result shall be done in a single action
    - (test case id: 948afab0-e707-4092-bb66-d9d1f2f9d76f)`, async (): Promise<void> => {

        // if you just want to check the result you can do it in one step
        // this is useful for checking application states after a test workflow was executed
        await Martha.attemptsTo(
            See.if(Response.of(mathApiRequest).as(Method.get()))
                .is(Expected.toBe(`8`)),
        );
    });
});