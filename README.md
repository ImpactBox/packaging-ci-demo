# Packaging CI Demo

Example repository using GitHub Actions and Salesforce DX to provide continuous
integration and automated packaging for managing releases. It illustrates our ideal
Continuous Integration (CI) process for a Salesforce application that we develop
as an unlocked package.

This repository is a template which means it can be used to easily generate a new repository
with the same files and structure (see [here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template)).

## Features

- Uses GitHub Actions for CI, including:
  - Creating a scratch org and deploying source for validate purposes
  - Runs Apex tests and frontend tests with `sfdx-lwc-jest`
  - On commits to `master`, create a new Package Version and release it for use
  - On commits to `master`, create a Release in GitHub that contains details of the new Package Version
