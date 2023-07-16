const puppeteer = require('puppeteer');
const {click, type, getText, clickDelayed} = require('../../libs/helpers')
const timeDelay = 17_000_000
const afterAllDelay = 4_000
let typeDelay = { delay: 10}
let browser 
let page 

// Import the data from the file
const dataUsers = require('./Data_Users.js');

describe('Previous And Next Buttons', () => { 

  // Hook beforeAll
  beforeAll ( async () => { 
    browser = await puppeteer.launch({ 
      headless: false,
      defaultViewport: null, // Set default viewport to null
      args: ['--start-maximized'] // Start browser maximized
    });

    // Adding the web page to test: 
    page = await browser.newPage()

    await page.goto('https://demoqa.com/webtables', { waituntil: 'networkidel0' })
  }, timeDelay)

  // Hook afterAll
  afterAll ( async () => { 
    // Wait for 3 seconds before closing the browser
    await new Promise(resolve => setTimeout(resolve, afterAllDelay));
    await browser.close()
  }, timeDelay); 

  // Executing the test cases: 
  it ('Adding data and changing row display', async () => { 

    for (let user of dataUsers) {
      await clickDelayed(page, '#addNewRecordButton')
      await page.waitForSelector('body > div.fade.modal.show > div > div')
      // Adding the info for new row. 
      await type(page, '#firstName', user.firstName, typeDelay)
      await type(page, '#lastName', user.lastName, typeDelay)
      await type(page, '#userEmail', user.email, typeDelay)
      await type(page, '#age', user.age, typeDelay)
      await type(page, '#salary', user.salary, typeDelay)
      await type(page, '#department', user.department, typeDelay)

      await click(page, '#submit')
      await page.waitForTimeout(250)
    }
  }, timeDelay);

  it ('Changing the displayed rows', async () => { 

    await page.waitForSelector('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.pagination-bottom > div > div.-center > span.select-wrap.-pageSizeOptions')

    // Changin the displayed rows to 5: 
    await page.select('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.pagination-bottom > div > div.-center > span.select-wrap.-pageSizeOptions > select', '5');
  })
}, timeDelay)
