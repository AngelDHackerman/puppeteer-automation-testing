# Puppeteer Automation Project

This project uses Puppeteer to automate a series of tests on various websites. Each script performs a series of tests on a specific website.

## Websites Tested

- [DemoQA](https://demoqa.com/)
- [Madison Islan Store](http://demo-store.seleniumacademy.com/)
- [Google](Google.com)
- [coinmarketcap](Coinmarketcap.com)
- [kayak](Kayak.com)
- [Expanding Testing](https://practice.expandtesting.com/)

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

This script performs a series of tests on DemoQA.com. The tests include...

### Madison Island Store Tests

This script performs a series of tests on http://demo-store.seleniumacademy.com/. The tests include...

### Google Tests

This script performs a series of tests on Google.com. The tests include...

### Coinmarketcap Tests

This script performs a series of tests on Coinmarketcap.com. The tests include...

### Kayak Tests

This script performs a series of tests on Kayak.com. The tests include...

### Expanding Testing Tests

This script performs a series of tests on https://practice.expandtesting.com/. The tests include...

(Continue with the description of the other scripts...)


## Contributions

Contributions are welcome. Please open an issue to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
