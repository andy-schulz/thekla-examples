---
title: Cucumber Reports
parent: Cucumber
has_children: false
nav_order: 100
---

# Reporting the Test Results
{: .no_toc}

## Usage Report

````text
┌─────────────────────────────────────┬──────────┬─────────────────────────────────────────┐
│ Pattern / Text                      │ Duration │ Location                                │
├─────────────────────────────────────┼──────────┼─────────────────────────────────────────┤
│ he can see the result {int}         │ 4ms      │ src\__step_definition__\the_steps.js:13 │
│   he can see the result 3           │ 10ms     │ features\add_numbers.feature:10         │
│   he can see the result -1          │ 1ms      │ features\add_numbers.feature:24         │
│   he can see the result -3          │ 1ms      │ features\add_numbers.feature:17         │
├─────────────────────────────────────┼──────────┼─────────────────────────────────────────┤
│ Bernhard opened a calculator        │ 0.33ms   │ src\__step_definition__\the_steps.js:3  │
│   Bernhard opened a calculator      │ 1ms      │ features\add_numbers.feature:8          │
│   Bernhard opened a calculator      │ 0ms      │ features\add_numbers.feature:15         │
│   Bernhard opened a calculator      │ 0ms      │ features\add_numbers.feature:22         │
├─────────────────────────────────────┼──────────┼─────────────────────────────────────────┤
│ he adds the numbers {int} and {int} │ 0ms      │ src\__step_definition__\the_steps.js:7  │
│   he adds the numbers -1 and -2     │ 0ms      │ features\add_numbers.feature:16         │
│   he adds the numbers 1 and -2      │ 0ms      │ features\add_numbers.feature:23         │
│   he adds the numbers 1 and 2       │ 0ms      │ features\add_numbers.feature:9          │
├─────────────────────────────────────┼──────────┼─────────────────────────────────────────┤
│ a step definition with no usage     │ UNUSED   │ src\__step_definition__\the_steps.js:21 │
└─────────────────────────────────────┴──────────┴─────────────────────────────────────────┘
````

## Exercises