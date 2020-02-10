Feature: Add two Numbers

  The "calculator" can add two numbers

  @Positive
  Scenario: Add positive numbers

    Given Bernhard opened a calculator
    When he adds the numbers 1 and 2
    Then he can see the result 3

  @Negative
  Scenario: Add negative numbers

    Given Bernhard opened a calculator
    When he adds the numbers -1 and -2
    Then he can see the result -3

  @Mixed @Positive @Negative
  Scenario: Add positive and negative numbers

    Given Bernhard opened a calculator
    When he adds the numbers 1 and -2
    Then he can see the result -1