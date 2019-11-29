# thekla-examples

Examples to use thekla with Cucumber and Jasmine

## Preparation

### Install Git

* [Install Git on MacOS, Linux or Windows](https://www.linode.com/docs/development/version-control/how-to-install-git-on-linux-mac-and-windows/)

> No admin rights on Windows? Use the portable edition.
> Don't forget to add git.exe to your path variable

### Install nodejs

* [Install the latest nodejs LTS version](https://nodejs.org/en/download/)
* [Install on Windows without admin rights](https://medium.com/@github.gkarthiks/how-to-install-nodejs-and-npm-in-non-admin-access-windows-machines-102fd461b54c)

Check that nodejs was installed successfully getting the version number.
You version number may be different.

```bash
node --version
$ v.12.13.0

npm --version
$ 6.12.0    
```

### Install Selenium

Checkout the [Selenium Installation Instructions](INSTALL_SELENIUM.md)

## Clone the Repository
  
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

## Available courses

* [`cucumber`](courses/cucumber/README.md)

## Available examples

* [``01_Quick_Start_Guide``](examples/01_Quick_Start_Guide) - Enter a search string into Googles search bar
* [``02_Use_Tasks_and_Page_Objects``](examples/02_Use_Tasks_and_Page_Objects) - how to create tasks and organize your elements in page objects
* [``50_Use_a_Rest_Api``](examples/50_Use_a_Rest_Api) - use a Rest API to add two numbers

### Run the examples

To run the examples use:

```bash
npm run '<EXAMPLES_FOLDER>'
```

for example

```bash
npm run 01_Quick_Start_Guide
```