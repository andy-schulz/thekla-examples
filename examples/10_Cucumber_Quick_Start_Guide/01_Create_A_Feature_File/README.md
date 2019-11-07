# A single feature file

```gherkin
Feature: Open a web page

  A Browser can open a web page by entering a URL


  Scenario: Navigate to Site
    Given Bernhard opened a browser
    When he enters the URL www.google.de
    Then he can find the search button on the page
```


Running the file with 

```bash
npm run test
```

leads to the following output

```bash
UUU

Warnings:

1) Scenario: Navigate to Site # features/open_page.feature:6
   ? Given Bernhard opened a browser
       Undefined. Implement with the following snippet:

         Given('Bernhard opened a browser', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });
       
   ? When he enters the URL www.google.de
       Undefined. Implement with the following snippet:

         When('he enters the URL www.google.de', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });
       
   ? Then he can find the search button on the page
       Undefined. Implement with the following snippet:

         Then('he can find the search button on the page', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });
       

1 scenario (1 undefined)
3 steps (3 undefined)
0m00.000s

```

The error message tells you that no glue code / step definition is specified yet.

We will write on in the next section.