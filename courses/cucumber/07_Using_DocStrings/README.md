---
title: Using DocStrings
parent: Cucumber
has_children: false
nav_order: 70
---

# Using DocStrings
{: .no_toc}

## Example Content

```text
├─ features
|   ├─ send_result_mail.feature
|   |         /* send calculation result as mail feature file */
├─ src
|   ├─ __step_definition__
|   |   ├─ the_steps.js
                /* step definition for the send as mail example */
```

## Why DocStrings

In the examples before we were passing standard strings inside the step as parameter.
If you want to specify for example an email feature you should be able to specify 

````gherkin
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
````

## Exercise

1. Use a DocString to print a Tree to the console:

    ````text
         *
       _/ \_
     _/     \_
    /___   ___\
        | |
    ````

<button class="btn js-toggle-dark-mode">Preview dark color scheme</button>

<script type="text/javascript" src="{{ "/assets/js/dark-mode-preview.js" | absolute_url }}"></script>