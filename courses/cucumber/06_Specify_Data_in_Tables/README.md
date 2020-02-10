---
title: Using Data Tables
parent: Cucumber
has_children: false
nav_order: 60
---

# Using Data Tables
{: .no_toc}

## Example Content

```text
├─ features
|   ├─ 01_add_numbers.feature
|   |         /* the "Add Numbers" Example using a data table */
|   ├─ 02_use_data_tables.feature
|   |         /* data table transformations in detail */
|   ├─ 03_add_multiple_numbers.feature
|   |         /* specifying multiple examples with scenario outlines */
├─ src
|   ├─ __step_definition__
|   |   ├─ data_table_steps.js
|   |           /* step definition for data table transformation */
|   |   ├─ the_steps.js
                /* step definition for the addition example */
```

[check the source](https://github.com/andy-schulz/thekla-examples/tree/master/courses/cucumber/06_Specify_Data_in_Tables)

## Why using data tables

Mixing step descriptions and test data quickly leads to hard to read scenarios. If the scenario itself is
clear to the user, he still has to read every step to understand what exactly will be tested and with which
data. Without proper IDE support its hard to read the test data within each step.

````gherkin
Scenario: Add positive numbers

    Given Bernhard opened a calculator
    When he adds the numbers 1 and 2
    Then he can see the result 3
````

If the number of passed test data grows for each step it will be even more complicated to read and
to change the test data in each scenario.

The use of data tables helps to separate the step definition from the test data:

```gherkin
  Scenario: Add positive numbers

  Use a data table in a step

    Given Bernhard opened a calculator
    When he adds the numbers
      | firstNumber | secondNumber |
      | 1           | 2            |
    Then he can see the result 3
```

Even without syntax highlighting the test data can easily be spotted within a step.

````gherkin
  Scenario: Add positive numbers

  Use a data table in a step

    Given Bernhard opened a calculator
    When he adds the numbers
      | firstNumber | secondNumber |
      | 1           | 2            |
    Then he can see the result 3
````

## Use data tables in your scenarios

A data table can be used in every step. It follows directly the step definition.

```gherkin
    Given something
    When he adds the numbers
      | firstNumber | secondNumber |
      | 1           | 2            |
    Then check something else
```

Table elements are separated by ``|`` and each row must start and end with a ``|``.
In this example above I used the first line as a header. Gherkin itself does not define a header line by default.

When you create the step definition you can specify if the first line or the first column shall
be interpreted as a header row or a header column.

Cucumber-js can then interpret the first line or the fist column as attribute names.

```gherkin
    Given something
    When he adds the numbers
      | firstNumber   | 1 |
      | secondNumber  | 2 |
    Then check something else
```

for Gherkin itself the two examples (header row / header column) are the same.

## Access the data in a data table

Cucumber-js has four possible ways to transform a data table:

```gherkin
  Scenario: Use Data Tables WITH a Header

  get Data from a table with a table header

    Given We are using a data table

    # the first row will be treated as a value attributes
    Then We can transform the table to an object using "dataTable.hashes()"
      | firstAttribute | secondAttribute |
      | 1              | 2               |
      | a              | b               |

    # the first row will be removed from the resulting data set
    And We can transform the table to an object without headers using "dataTable.rows()"
      | firstAttribute | secondAttribute |
      | 3              | 4               |
      | c              | d               |

    # The elements in the first column will be treated as attributes
    And We can transform the plain table to an object with key-value pairs using "dataTable.rowsHash()"
      | key1 | a |
      | key2 | b |

    # The elements in the first row will be treated as a plan row
    And We can transform the table to plain 2D Array using "dataTable.raw()"
      | firstElement | secondElement |
      | c            | d             |
```

Lets start with the first data table step:

```gherkin
    # the first row will be treated as a value attributes
    Then We can transform the table to an object using "dataTable.hashes()"
      | firstAttribute | secondAttribute |
      | 1              | 2               |
      | a              | b               |
```

The following step definition (using ``dataTable.hashes()``):

```javascript
Given(/We can transform the table to an object using "dataTable.hashes\(\)"/, function (dataTable) {
    const objectFromTable = dataTable.hashes();

    console.log(`
    Printing the datatable as Object (dataTable.hashes()):
    ${JSON.stringify(objectFromTable, null, `\t`)}
    `)
});
```

will output:

```text
    Printing the datatable as Object (dataTable.hashes()):
    [
        {
                "firstAttribute": "1",
                "secondAttribute": "2"
        },
        {
                "firstAttribute": "a",
                "secondAttribute": "b"
        }
    ]
```

The elements of the first row are used as attribute names (``firstAttribure`` / ``secondAttribute``)
and the remaining rows contain the attribute values.

Printing the same data table in its raw format (using ``dataTable.raw()``):

```javascript
Given(/We can transform the table to plain 2D Array using "dataTable.raw\(\)"/, function (dataTable) {
    const rawDataTable = dataTable.raw();

    console.log(`
    Printing the datatable as a raw 2D array (dataTable.raw()):
    ${JSON.stringify(rawDataTable, null, `\t`)}
    `)
});
```

will output:

```text
    Printing the datatable as a raw 2D array (dataTable.raw()):
    [
        [
                "firstAttribute",
                "secondAttribute"
        ],
        [
                "1",
                "2"
        ],
        [
                "a",
                "b"
        ]
    ]
```

Now the first line is interpreted as a standard table row as well as the lines two and three.

## Specify multiple examples within one scenario

Lets assume you need two or more examples which are almost identical to describe a feature,
like 1 + 2 = 3 and 2 + 3 = 5. As of now you could do this by duplication the scenario:

```gherkin
Scenario: Add 1 and 2
    Given Bernhard opened a calculator
    When he adds the numbers 1 and 2
    Then he can see the result 3

Scenario: Add 2 and 3
    Given Bernhard opened a calculator
    When he adds the numbers 2 and 3
    Then he can see the result 5
```

This would lead to a situation where multiple examples are just distinguished by the use of
test data and the expected result.

To facilitate this Gherkin gives you the ability to define scenario outlines:

```gherkin
  Scenario Outline: Add multiple positive numbers - (check that adding <firstNumber> to <secondNumber> results in <result>)

  Use a data table for the whole scenario

    Given Bernhard opened a calculator
    When he adds the numbers <firstNumber> and <secondNumber>
    Then he can see the result <result>

    Examples:
      | firstNumber | secondNumber | result |
      | 1           | 2            | 3      |
      | 2           | 3            | 5      |
```

Scenario Outlines are defined by using the keyword ```Scenario Outline``` at the beginning and
the ``Examples`` section at the end of the scenario.

The elements or attributes in the examples tables first line can then be used as placeholder
throughout the scenario.

When executing the scenario it will be repeated for every specific example defined in the
examples section.

Of course the addition example is very simple. If you need a more realistic example where this
feature might come in handy, think of a password reset action where the new password needs to
support some rules:

e.g.

1. password not containing any letters -> error
1. password not containing any numbers -> error
1. password not containing any special characters -> error

## Exercise

1. Execute all three Scenarios separately located under the features folder
    * Hint: execute each tag and specify the step definition folder
1. Try to explain what the remaining two data table transformations are doing:
    1. dataTable.rows()
    1. dataTable.rowsHash()
1. Write a subtraction SCENARIO OUTLINE with:
    1. three steps
        1. open the calculator
        2. specify the numbers to be subtracted
        3. specify the result
    1. Use a data table for each step in which elements of the subtraction are specified.
    1. Specify THREE subtractions in the outline.
    1. Run the spec and see that all three scenario iterations are run.
