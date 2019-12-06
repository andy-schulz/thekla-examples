Feature: Add two Numbers

  The "calculator" can add two numbers

  @UseDataTable
  Scenario: Add positive numbers

    Use a data table in a step

    Given Bernhard opened a calculator
    When he adds the numbers
      | firstNumber | secondNumber |
      | 1           | 2            |
    Then he can see the result 3


  @UseScenarioOutline
  Scenario Outline: Add multiple positive numbers - (check that adding <firstNumber> to <secondNumber> results in <result>)

    Use a data table for the whole scenario

    Given Bernhard opened a calculator
    When he adds the numbers <firstNumber> and <secondNumber>
    Then he can see the result <result>

    Examples:
      | firstNumber | secondNumber | result |
      | 1           | 2            | 3      |
