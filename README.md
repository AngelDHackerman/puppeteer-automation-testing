# Puppeteer Automation Testing

We will use differente web pages in order to do our testing, below you'll find the links to the Notion pages,
each links contains the __test cases__, __purpuse of the testing__, __steps to follow__, __validation document (screen shots of the testing)__, and the manual test for each case.

In order to see the the full details of each page tested, click on the links listed below.
Or if you want to see the code used for the automation test, click on the directory that has the name of the page you want to check. 

[DemoQa](https://github.com/AngelDHackerman/puppeteer-automation-testing/tree/master/01_DemoQa)

<!-- [Madison Demo-store](https://www.notion.so/Madison-Demo-store-24706e51f4784165956dec4ceb31c5b0?pvs=21) -->

<!-- [Practice Expanding-testing](https://www.notion.so/practice-expandin-testing-db4d5d9a96534e24b586defae09383d9?pvs=21) -->

## Tests

Each script performs a series of automated tests on a specific website. The tests vary depending on the website, but may include things like checking search __functionality__, __tracking cryptocurrency prices__, __verifying booking functionality__, __end to end testing__ in the stores as well as __performance testing__ and __accesibility testing__.

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the project's dependencies.

This project uses several dependencies:

- [Puppeteer](https://github.com/puppeteer/puppeteer): Provides a high-level API to control Chrome or Chromium over the DevTools Protocol. Puppeteer runs headless by default but can be configured to run full (non-headless) Chrome or Chromium.
- [Jest](https://jestjs.io/): A delightful JavaScript Testing Framework with a focus on simplicity.
- [Prettier](https://prettier.io/): An opinionated code formatter.
- [jest-image-snapshot](https://github.com/americanexpress/jest-image-snapshot): A Jest matcher for image comparisons. Most commonly used for visual regression testing.
- [@axe-core/puppeteer](https://github.com/dequelabs/axe-core-npm/tree/develop/packages/puppeteer): Provides a chainable aXe API for Puppeteer and automatically injects into all frames.

Please make sure to install these dependencies by running 
```
npm init
npm i puppeteer jest 
npm i -D prettier 
npm i jest-image-snapshot 
npm i @axe-core/puppeteer
```


## Usage

To run a script, navigate to the project directory in your terminal and run `npm run <script-name.test.js>`. For example, to run the Google tests script, you would run `npm run google-tests.test.js`.

## Scripts

### DemoQA Tests

This script performs a series of tests on http://DemoQA.com. 


## Contributions

Contributions are welcome. Please open an issue to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
