# Comments to a feature file can be added by preceding the line with #
# A Feature as marked with the keyword Feature: followed by the feature name
Feature: Add two Numbers

  The calculator can add two numbers
  # you can add a feature description, which is following the line with the Feature keyword and before the Scenario:

  # A scenario is described with the keyword Scenario: followed by the scenario description
  Scenario: Add positive numbers

    The calculator should be able to add two positive numbers
    # To further describe the scenario you can add a description directly following the Scenario: keyword.

    # The scenario steps start with the keywords Given, When, Then followed by the step description
    Given Bernhard opened a calculator
    When he adds the numbers 1 and 2
    Then he can see the result 3