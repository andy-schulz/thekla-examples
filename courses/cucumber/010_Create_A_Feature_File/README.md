---
title: Create a Feature File
parent: Cucumber
has_children: false
nav_order: 10
---

# Create a Feature File
{: .no_toc}

## A single feature file

A simple feature file consists of:

1. a feature with a feature name
1. an optional feature description
1. a scenario with a scenario name
1. an optional scenario description
1. the scenario steps starting with Given, When, Then

````gherkin
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
````

## Folder Structure

Features are stored in a folder called ``features``

If you check the current directory it should look like this:

````text
├─ features
|   ├─ add_numbers.feature   .... the feature file
├─ README.md                 .... this README file
````

This is all you need to start execution your first feature

## Execution

{% capture includes %}

    ``SECTION: Node.js``
    {% include_relative NODEJS.md %}
    ``END SECTION``

{% endcapture %}{% include section_tabs.html html=includes %}


## Exercises

1. Add a new step to the scenario and check the output after feature execution
1. Create new feature to subtract positive numbers from each other
    * start cucumber and check the output
    * make sure cucumber executes your new feature file

[Next: Create your first step definition](cucumber/020_Create_The_Step_Definition/README.md)
