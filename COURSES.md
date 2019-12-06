---
title: --- Courses ---
has_children: true
nav_order: 10:q
---

# Available Courses

* [``Testing with Cucumber``](courses/cucumber/README.md) - create feature files and learn the fundamentals of gherkin and cucumber
* [``Testing with Jasmine``](courses/jasmine/README.md) - tbd
* [``Testing with Mocha``](courses/mocha/README.md) - tbd

## Prepare Environment

1. Make sure you have [VS Code installed](docs/PREPARATION.md/#install-vs-code).
    * To follow the Cucumber Course
    * Start VS Code and [Install Cucumber Full Support Plugin](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete)
1. Follow the instruction to install [NodeJS](docs/PREPARATION.md/#install-nodejs) 
and [Git](docs/PREPARATION.md/#install-git)

### Get the code examples 

```shell script
git clone https://github.com/andy-schulz/thekla-examples.git
```

Install node packages

````shell script
cd thekla-examples/courses/

npm install
````

and check that cucumber is installed:

````shell script
npx cucumber-js --version
```` 


