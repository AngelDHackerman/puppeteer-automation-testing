const puppeteer = require('puppeteer');
const {click, type, getCount, clickDelayed} = require('../../libs/helpers')
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
  it ('Adding data to table, Step: 1 - 2', async () => { 
    let addingModal = 'body > div.fade.modal.show > div > div'

    for (let user of dataUsers) {
      await clickDelayed(page, '#addNewRecordButton')
      await page.waitForSelector(addingModal)

      // Adding the info for new row. 
      await type(page, '#firstName', user.firstName, typeDelay)
      await type(page, '#lastName', user.lastName, typeDelay)
      await type(page, '#userEmail', user.email, typeDelay)
      await type(page, '#age', user.age, typeDelay)
      await type(page, '#salary', user.salary, typeDelay)
      await type(page, '#department', user.department, typeDelay)
      await click(page, '#submit')
      await page.waitForTimeout(250)  // time needed to see next registration form after each iteration
    }
  }, timeDelay);

  it ('Changing the displayed rows, Step: 3 - 5', async () => { 
    let dropDownMenu = '#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.pagination-bottom > div > div.-center > span.select-wrap.-pageSizeOptions > select'

    await page.waitForSelector(dropDownMenu)

    // Changin the displayed rows to 5: 
    await page.select(dropDownMenu, '5');

    // Verify that there are only 5 items per page
    let classRows = '.rt-tr-group[role="rowgroup"]';
    const rowCount = await getCount(page, classRows);
    expect(rowCount).toBe(5);

  }, timeDelay)

  // it ( 'Step 6 - 8', async () => { 


  // }, timeDelay)
}, timeDelay)


