# A single feature file

```gherkin
Feature: Open a web page

  A Browser can open a web page by entering a URL


  Scenario: Navigate to Site
    Given Bernhard opened a browser
    When he enters the URL www.google.de
    Then he can find the search button on the page
```


```bash
P--

Warnings:

1) Scenario: Navigate to Site # features/open_page.feature:6
   ? Given Bernhard opened a browser # dist/step_definition/the_steps.js:4
       Pending
   - When he enters the URL www.google.de # dist/step_definition/the_steps.js:8
   - Then he can find the search button on the page # dist/step_definition/the_steps.js:12

1 scenario (1 pending)
3 steps (1 pending, 2 skipped)
0m00.001s

```