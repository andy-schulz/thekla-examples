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
> Don't forget to add git.exe to your path variable

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