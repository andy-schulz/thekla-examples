import {element, By, UntilElement} from "@thekla/web-and-mobile-abilities";

export const GOOGLE_SEARCH_FIELD = element(By.css(`[name='q']`))
    .shallWait(UntilElement.is.visible.forAsLongAs(5000))
    .called(`The Google search field (GPO)`);

export const GOOGLE_SEARCH_FIELD_NO_WAIT = element(By.css(`[name='q']`))
    .called(`The Google search field (GPO)`);

export const GOOGLE_SUBMIT_BUTTON = element(By.css(`.FPdoLc [name='btnK']`))
    .called(`The Google Submit Search button on the main Page`);

export const CALCULATOR_INPUT = element(By.css(`#cwos`))
    .called(`Google calculator input field`)
    .shallWait(UntilElement.is.visible.forAsLongAs(5000));

export const CALCULATOR_INPUT_NO_WAIT = element(By.css(`#cwos`))
    .called(`Google calculator input field`)

