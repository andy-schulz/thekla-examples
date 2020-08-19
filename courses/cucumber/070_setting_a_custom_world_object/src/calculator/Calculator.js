class Calculator {

    add(firstNumber, secondNumber) {

        if(typeof firstNumber !== 'number')
            throw new Error(`the first parameter is not a number`);

        if(typeof secondNumber !== 'number')
            throw new Error(`the first parameter is not a number`);

        return firstNumber + secondNumber
    }
}

module.exports = Calculator;