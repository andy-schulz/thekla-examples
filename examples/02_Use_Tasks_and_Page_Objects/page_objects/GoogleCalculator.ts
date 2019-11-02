import {SppElement, element, By} from "@thekla/web-and-mobile-abilities";

export const input: SppElement = element(By.css(`.card-section [role='presentation']`)).called(`the calculator input field`);
// export const inputNumber: SppElement =    element(By.css(`#cwos`));
export const minus: SppElement = element(By.css(`[jsname='pPHzQc']`)).called(`the subtraction button`);
export const plus: SppElement = element(By.css(`[jsname='XSr6wc']`)).called(`the add button`);

export const zero: SppElement = element(By.css(`[jsname='bkEvMb']`)).called(`number zero`);
export const one: SppElement = element(By.css(`[jsname='N10B9']`)).called(`number one`);
export const two: SppElement = element(By.css(`[jsname='lVjWed']`)).called(`number two`);
export const three: SppElement = element(By.css(`[jsname='KN1kY']`)).called(`number three`);
export const four: SppElement = element(By.css(`[jsname='xAP7E']`)).called(`number four`);
export const five: SppElement = element(By.css(`[jsname='Ax5wH']`)).called(`number five`);
export const six: SppElement = element(By.css(`[jsname='abcgof']`)).called(`number six`);
export const seven: SppElement = element(By.css(`[jsname='rk7bOd']`)).called(`number seven`);
export const eight: SppElement = element(By.css(`[jsname='T7PMFe']`)).called(`number eight`);
export const nine: SppElement = element(By.css(`[jsname='XoxYJ']`)).called(`number nine`);
export const res: SppElement = element(By.css(`[jsname='Pt8tGc']`)).called(`calculate the result (aka the equal sign)`);