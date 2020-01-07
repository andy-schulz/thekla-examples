Feature: Use Data Tables

  example using data tables and transform it to an object or array

  @TransformTheDataTable
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
      | firstAttribute | secondAttribute |
      | 1              | 2               |
      | a              | b               |