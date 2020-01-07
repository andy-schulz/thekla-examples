---
title: --- Code Examples ---
has_children: true
nav_order: 20
---

# Available Code Examples

* [``01_Quick_Start_Guide``](examples/01_Quick_Start_Guide/README.md) - Enter a search string into Googles search bar
* [``02_Use_Tasks_and_Page_Objects``](02_Use_Tasks_and_Page_Objects) - how to create tasks and organize your elements in page objects
* [``50_Use_a_Rest_Api``](50_Use_a_Rest_Api) - use a Rest API to add two numbers

## Prepare Environment

[Setup your environment](docs/BASIC_SETUP.md) and [Install Selenium](docs/WEB_SETUP.md).

# Clone the Repository
  
Make sure you have a selenium standalone server running locally.

clone the repository

````bash
git clone https://github.com/andy-schulz/thekla-examples.git
````

go to the examples project
````
cd thekla-examples
````

install the packages

````bash
npm install
````

## Run the Examples

First [prepare](docs/PREPARATION.md) your environment.

To run the examples use:

```bash
npm run '<EXAMPLES_FOLDER>'
```

e.g.

```bash
npm run 01_Quick_Start_Guide
```