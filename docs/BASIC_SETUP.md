---
title: Basic Test Setup
parent: Environment Setup
has_children: false
nav_order: 10
---

# General Preparation

## Install VS Code

1. [Download and Install VSCode](https://code.visualstudio.com/docs?dv=win)

## Install Git

* [Install Git on MacOS, Linux or Windows](https://www.linode.com/docs/development/version-control/how-to-install-git-on-linux-mac-and-windows/)

> No admin rights on Windows? Use the portable edition.
> Don't forget to add the path with git.exe to your PATH variable

If you are behind a corporate proxy set the HTTP_PROXY and HTTPS_PROXY variables or set the
proxy directly in your git config:

````shell script
git config --global http.proxy "http://proxy.mycompany.com:PORT"
git config --global https.proxy "http://proxy.mycompany.com:PORT"
````

and with an authenticated proxy use:

````shell script
git config --global http.proxy "http://USERNAME:PASSWORD@proxy.mycompany.com:PORT"
git config --global https.proxy "http://USERNAME:PASSWORD@proxy.mycompany.com:PORT"
````

For more details check the [git proxy gist](https://gist.github.com/evantoli/f8c23a37eb3558ab8765).

## Install nodejs

* [Install the latest nodejs LTS version](https://nodejs.org/en/download/)

### Install nodejs on Windows without admin rights

1. Download the Windows Binary from [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
1. Extract the archive to a folder of your choice, e.g. ``C:\Portable\node_vXX``
1. add the nodejs folder to your PATH variable 

If you are behind a corporate proxy you have to [set the proxy and https-proxy configuration](https://gist.github.com/alienlebarge/10260853).

Check that nodejs was installed successfully by printing the version number from a command prompt.
Your version number may vary.

```bash
node --version
$ v.12.13.0

npm --version
$ 6.12.0    
```