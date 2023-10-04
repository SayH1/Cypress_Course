### Cypress 101
This content is intended for anyone with or without programming background to freshly pick up Cypress for basic E2E testing.

## Installation
#npm install cypress
Npm (Node Package Manager) is a package manager that we will be using, so we need to install Node first.
Download [Node here](https://nodejs.org/en/download)

# npm init
This command is used to initialize a project, and then we will be adding a Cypress package to this project with `npm install cypress`.

## Opening Cypress for the first time
After the installation, we can check if our installation is successful by running this command to open cypress `npx cypress open`
It should start a nice UI to guide you through the Cypress Test Runner.

## Let's see what's there inside a test file
Describe - Test Suite

It - Test scenario

Beforeeach - Sets of commands to execute before each individual test scenario

Aftereach - Sets of command to execute after each individual test scenario (Also known as Tear Down)

## Page Object Mobel
Page (POM) is a design framework that helps keep track the all the elements that are going on with our software by separating our software into pages, and see what is contain with in each page. 
This greatly reduces the duplication in the spec file level and also improves the maintenance a lot as we only have to cater to the POM level.
