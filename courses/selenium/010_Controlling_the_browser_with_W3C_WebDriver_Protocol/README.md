---
title: Create a Feature File
parent: Selenium
has_children: false
nav_order: 10
---

# Test Automation with the W3C WebDriver Protocol

To understand the Selenium its best to use the tool with its own API, the 
[W3C WebDriver specification](https://w3c.github.io/webdriver/). For the following examples you don't need 
an in depth knowledge of the specification. This sections intends to demonstrate how test automation works
with Selenium on its basic level without the use of a programming language like JAVA, Ruby or JavaScript.

## Prerequisites

Please make sure you have [Postman](https://www.postman.com/downloads/) installed and followed the instructions to 
[install Selenium manually](../docs/WEB_SETUP.md#manual-installation-by-downloading-the-server-and-driver-files) and its Firefox and Chrome Drivers.

## Starting with Postman

### Create a collection

### Create a Request

## What is an URL

## Start the Chrome Driver

Go to you Selenium folder and check if the chrome driver is available. The directory structure should look like:

````text
├─ chromedriver.exe
├─ geckodriver.exe
├─ selenium-server-standalone.jar
````

Starting the driver with just:

````bash
./chromedriver.exe
````

should lead to the following output:

````text
Starting ChromeDriver <VERSION INFO> on port 9515
Only local connections are allowed.
Please protect ports used by ChromeDriver and related test frameworks to prevent access by malicious code.
````

Now Chrome Driver is started at port ``9515`` and is ready to use. Please remember the port information as we need it in
the following sections.

## Start the Browser


``/session``

``POST http://localhost:9515/session``

````json
{
    "desiredCapabilities": {
    }
}
````

returns 

````json
{
    "sessionId": "13a5c98034abdc300f8b516d23aa309b",
    "status": 0,
    "value": {
        "acceptInsecureCerts": false,
        "acceptSslCerts": false,
        "applicationCacheEnabled": false,
        "browserConnectionEnabled": false,
        "browserName": "chrome",
        "chrome": {
            "chromedriverVersion": "80.0.3987.106 (f68069574609230cf9b635cd784cfb1bf81bb53a-refs/branch-heads/3987@{#882})",
            "userDataDir": "YOUR LOCAL DATA FOLDER"
        },
        "cssSelectorsEnabled": true,
        "databaseEnabled": false,
        "goog:chromeOptions": {
            "debuggerAddress": "localhost:53509"
        },
        "handlesAlerts": true,
        "hasTouchScreen": false,
        "javascriptEnabled": true,
        "locationContextEnabled": true,
        "mobileEmulationEnabled": false,
        "nativeEvents": true,
        "networkConnectionEnabled": false,
        "pageLoadStrategy": "normal",
        "platform": "Windows",
        "proxy": {},
        "rotatable": false,
        "setWindowRect": true,
        "strictFileInteractability": false,
        "takesHeapSnapshot": true,
        "takesScreenshot": true,
        "timeouts": {
            "implicit": 0,
            "pageLoad": 300000,
            "script": 30000
        },
        "unexpectedAlertBehaviour": "ignore",
        "version": "80.0.3987.122",
        "webStorageEnabled": true
    }
}
````

**Example**



## Load Google Search

POST http://localhost:9515/session/77b41455d86ce3b54c95208ea1fb8801/url

``/session/:SessionId/url``

``http://{{host}}/session/13a5c98034abdc300f8b516d23aa309b/url``

````json
{
	"url": "https://www.google.com"
}
````

````json
{
    "sessionId": "13a5c98034abdc300f8b516d23aa309b",
    "status": 0,
    "value": null
}
````

## Enter the Search Text

1. identify the field
2. Enter the test into the field 

**Identify the Input Field**

``/session/:SessionId/element (search field)``

``http://{{host}}/session/13a5c98034abdc300f8b516d23aa309b/element``

````json
{
	"using": "name",
	"value": "q"
}
````

returns 

````json
{
    "sessionId": "13a5c98034abdc300f8b516d23aa309b",
    "status": 0,
    "value": {
        "ELEMENT": "0.9684057663908818-1"
    }
}
````

**Enter the Text**

``/session/:SessionId/element/:ElementId/value``

``http://localhost:9515/session/13a5c98034abdc300f8b516d23aa309b/element/0.9684057663908818-1/value``

````json
{
	"value":["software test automation"]
}
````

returns

````json
{
    "sessionId": "13a5c98034abdc300f8b516d23aa309b",
    "status": 0,
    "value": null
}
````


## Click the Search Button

1. Identify the Search Button
2. Click the Button

**Identify the Search Button**

``/session/:SessionId/element``

``http://localhost:9515/session/13a5c98034abdc300f8b516d23aa309b/element``

````json
{
	"using":"name",
	"value":"btnK"
}
````

````json
{
    "sessionId": "13a5c98034abdc300f8b516d23aa309b",
    "status": 0,
    "value": {
        "ELEMENT": "0.9684057663908818-2"
    }
}
````

**Click the Search Button**

``/session/:SessionId/element/:ElementId/click``

``http://localhost:9515/session/13a5c98034abdc300f8b516d23aa309b/element/0.9684057663908818-2/click``

````json

````

````json
{
    "sessionId": "13a5c98034abdc300f8b516d23aa309b",
    "status": 0,
    "value": null
}
````