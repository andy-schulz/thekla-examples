Feature: Save the Calculation Result to File

  The "calculator" can add two numbers

  For this scenario just imagine the calculator has a "Save to File" feature
  saving all calculations as text to a file.

  @UseDocString
  Scenario: Save a Single Calculation Result to File 

  Use a DocString within a step.

    Given Bernhard opened a calculator
    And he summed up the nummbers
      | number1 | number2 | result |
      | 1       | 3       | 4      |
    When he saves the calculation to a file
    Then he can see the file containing
    """
    I added the number 1 to number 3
    and got the result: 4
    """





