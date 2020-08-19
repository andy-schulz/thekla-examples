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





