Feature: Add two Numbers

  The "calculator" can add two numbers

  Scenario: Add positive numbers

    Given Bernhard opened a calculator
    When he adds the numbers "1" and "2"
    Then he can see the result 3