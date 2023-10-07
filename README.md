### Cypress 101
This content is intended for anyone with or without programming background to freshly pick up Cypress for basic E2E testing.

## What is Cypress?
It is a testing tool that allows its users to develop test automation for Web application testing. While it has some limitations like inability to test Mobile applications, handling windows or tabs, it is user friendly with its syntaxs and test runner UI.

## Installation
#npm install cypress
Npm (Node Package Manager) is a package manager that we will be using, so we need to install Node first.
Download [Node here](https://nodejs.org/en/download)
You can try to run `npm --version` to check if npm is ready to be run on your terminal or command prompt.
<br/>
<img width="363" alt="image" src="https://github.com/SayH1/Cypress_Course/assets/45631442/8ac0269b-d453-4ec3-92ee-a527775f69c5">

# npm init
This command is used to initialize a project, and then we will be adding a Cypress package to this project with `npm install cypress`.

## Opening Cypress for the first time
After the installation, we can check if our installation is successful by running this command to open cypress `npx cypress open`
It should start a nice UI to guide you through the Cypress Test Runner.
<br /><img width="823" alt="image" src="https://github.com/SayH1/Cypress_Course/assets/45631442/10d15c1b-2b74-4ce8-9c40-08ba9dec3db9">


## Let's see what's there inside a test file
Describe - Test Suite, a collection of test cases under a common testing feature/flow/story
<br/>
<img width="427" alt="image" src="https://github.com/SayH1/Cypress_Course/assets/45631442/e9bc795d-b630-479e-9464-fb9c5a592942">


it - Test scenario
<br/>
<img width="654" alt="image" src="https://github.com/SayH1/Cypress_Course/assets/45631442/fda2c584-d239-4a23-b4f8-820f2990772b">


beforeEach - Sets of commands to execute before each individual test scenario
<img width="456" alt="image" src="https://github.com/SayH1/Cypress_Course/assets/45631442/136b0cbb-67c5-4793-a26c-016ba03fbbdd">


afterEach - Sets of command to execute after each individual test scenario (Also known as Tear Down)

## Page Object Mobel
Page (POM) is a design framework that helps keep track the all the elements that are going on with our software by separating our software into pages, and see what is contain with in each page. 
This greatly reduces the duplication in the spec file level and also improves the maintenance a lot as we only have to cater to the POM level.
<br/>
<img width="578" alt="image" src="https://github.com/SayH1/Cypress_Course/assets/45631442/94b93c0a-5a14-4ef8-9164-dd8313a17aa7">

