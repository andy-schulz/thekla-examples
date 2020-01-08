---
title: --- Courses ---
has_children: true
nav_order: 10
---

# Available Courses

* [``Testing with Cucumber``](courses/cucumber/README.md) - create feature files and learn the fundamentals of gherkin and cucumber
* [``Testing with Jasmine``](courses/jasmine/README.md) - tbd
* [``Testing with Mocha``](courses/mocha/README.md) - tbd

## Prepare Environment

[Setup your environment.](docs/BASIC_SETUP.md)

### Get the code examples 

I recommend creating a separate folder like ``projects`` or ``Projects`` for your repos.

In a Terminal / Powershell / CMD do:

````bash
cd <MY_PROJECTS_FOLDER>

git clone https://github.com/andy-schulz/thekla-examples.git
````

Install node packages

````bash
cd <MY_PROJECTS_FOLDER>/thekla-examples/courses/

npm install
````

and check that cucumber is installed:

````bash
npx cucumber-js --version
````

should output:

````bash
5.1.0
````
