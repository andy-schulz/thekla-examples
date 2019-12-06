Feature: Search Google

  The test shall open google and type some search items into the search field

  Scenario: search for test automation
    Given Bernhard opened Site "https://www.google.de"
    When He searches for "software test automation"
    Then He can see some results