Feature: Open a web page

  A Browser can open a web page by entering a URL


  Scenario: Navigate to Site
    Given Bernhard opened a browser
    When he enters the URL www.google.de
    Then he can find the search button on the page