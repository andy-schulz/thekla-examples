---
title: Install Selenium
parent: Environment Setup
has_children: false
nav_order: 20
---

# Install Selenium

## Manual installation by downloading the server and driver files

First download and extract the following files into a folder of your choice

1. [Selenium Standalone Server](https://selenium.dev/downloads/)
1. [gecko driver](https://github.com/mozilla/geckodriver/releases)
    * FOR WINDOWS USERS: download version 0.24 until the 
    [known bug](https://github.com/mozilla/geckodriver/issues/1617) is fixed
1. [chrome driver](https://chromedriver.chromium.org/downloads)
    * Make sure the driver version matches your installed chrome browser version.

Your folder should now contain the following files:

````
├─ selenium-server-standalone.jar
├─ chromedriver.exe
├─ geckodriver.exe

````

> If you want to keep the version information on those files, change the start script accordingly

start the selenium server as follows:

```bash
cd <YOUR_SELENIUM_FOLDER>

java selenium-server-standalone.jar -port 4444

```

## Automatic installation with ``webdriver-manager``

> These instructions might not work behind a corporate proxy as some IPs could be blocked 
> even if you specify the ``--proxy`` option.
> Just try it out and see for yourself if it works.

To install selenium we are using ``webdriver-manager`` as it facilitates the
installation and later on the update process.

Install webdriver-manager

```bash
npm install -g webdriver-manager
```

Get the latest selenium standalone and Chrome / Firefox driver.

```bash
webdriver-manager update
```

Start the Selenium Server.

```bash
webdriver-manager start
```

Stop the Selenium Server.

you can do ``Ctrl + c`` inside the window you started the server or

```bash
webdriver-manager shutdown
```

check [the webdriver-manager repository](https://github.com/angular/webdriver-manager) for more information