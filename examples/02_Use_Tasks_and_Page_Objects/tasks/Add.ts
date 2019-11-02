import * as GoogleCalculator          from "../page_objects/GoogleCalculator";
import {Task, PerformsTask, Activity} from "@thekla/core";
import {Click}                        from "@thekla/web-and-mobile-abilities";

export class Add extends Task<void, void> {
    private secondNumber = 0;

    public static number(firstNumber: number): Add {
        return new Add(firstNumber);
    }

    public to(secondNumber: number): Add {
        this.secondNumber = secondNumber;
        return this;
    }

    public performAs(actor: PerformsTask): Promise<void> {
        return actor.attemptsTo(
            ...this.enterNumber(this.firstNumber),
            Click.on(GoogleCalculator.plus),
            ...this.enterNumber(this.secondNumber),
            Click.on(GoogleCalculator.res)
        )
    }

    private constructor(private firstNumber: number) {
        super();
    }

    public enterNumber(number: number): Activity<void, void>[] {
        const clickFlow: Activity<void, void>[] = [];
        if (number < 0) {
            clickFlow.push(Click.on(GoogleCalculator.minus));
        }

        for (const char of number.toString()) {
            switch (char) {
                case `1`:
                    clickFlow.push(Click.on(GoogleCalculator.one));
                    break;
                case `2`:
                    clickFlow.push(Click.on(GoogleCalculator.two));
                    break;
                case `3`:
                    clickFlow.push(Click.on(GoogleCalculator.three));
                    break;
                case `4`:
                    clickFlow.push(Click.on(GoogleCalculator.four));
                    break;
                case `5`:
                    clickFlow.push(Click.on(GoogleCalculator.five));
                    break;
                case `6`:
                    clickFlow.push(Click.on(GoogleCalculator.six));
                    break;
                case `7`:
                    clickFlow.push(Click.on(GoogleCalculator.seven));
                    break;
                case `8`:
                    clickFlow.push(Click.on(GoogleCalculator.eight));
                    break;
                case `9`:
                    clickFlow.push(Click.on(GoogleCalculator.nine));
                    break;
                case `0`:
                    clickFlow.push(Click.on(GoogleCalculator.zero));
                    break;
            }
        }
        return clickFlow;
    }
}