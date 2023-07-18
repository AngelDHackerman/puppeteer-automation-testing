const puppeteer = require('puppeteer');
const {click, type, getCount, clickDelayed, getText} = require('../../libs/helpers')
const timeDelay = 17_000_000
const afterAllDelay = 4_000
let typeDelay = { delay: 10}
let browser 
let page 

// Import the data from the file
const dataUsers = require('./Data_Users.js');

// Validating the page shown function: 
async function validatePageShown(page, expectedPage) {
  let inputValue = await page.$eval('input[aria-label="jump to page"]', el => el.value);
  expect(inputValue).toBe(expectedPage);
}


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
  it ('Adding data users to the table', async () => { 
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

  it ('Changing the displayed rows to only 5', async () => { 
    let dropDownMenu = '#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.pagination-bottom > div > div.-center > span.select-wrap.-pageSizeOptions > select'

    await page.waitForSelector(dropDownMenu)

    // Changin the displayed rows to 5: 
    await page.select(dropDownMenu, '5');
    await page.waitForTimeout(250)  // time needed to see next registration form after each iteration
  }, timeDelay)

  it ('Validating there is only 5 elements per table', async () => { 
    // Verify that there are only 5 items per page
    let classRows = '.rt-tr-group[role="rowgroup"]';
    const rowCount = await getCount(page, classRows);
    expect(rowCount).toBe(5);
  })

  it ( 'Validating the N. of the page shown', async () => { 
    await validatePageShown(page, '1')
  }, timeDelay)
  
  it ('Moving forward into the new table pages, through all the table pages', async () => {
    // Get the total number of pages
    let totalPagesText = await getText(page, '#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.pagination-bottom > div > div.-center > span.-pageInfo > span');
    let totalPages = parseInt(totalPagesText);
    console.log(`Total number of pages found was ${totalPages}`)
  
    // Iterate through all pages
    for (let i = 1; i <= totalPages; i++) {
      // Verify that we are on the correct page
      await validatePageShown(page, i.toString());
      // Click the "Next" button
      let nextButton = '#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.pagination-bottom > div > div.-next > button'
      await clickDelayed(page, nextButton);
    }
  }, timeDelay)
  
  it('Validating next button is disabled', async () => { 
    // Get the disabled attribute of the button
    let nextButton = '#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.pagination-bottom > div > div.-next > button'
    let isDisabled = await page.$eval(nextButton, button => button.disabled);
    console.log(`Button Next is disabled: ${isDisabled}`)
  
    // Assert that the button is disabled
    expect(isDisabled).toBe(true);
  }, timeDelay)
  
  it ('Moving backwards into the table pages, using the previous button', async () => {
    // Getting total pages
    let totalPagesText = await getText(page, '#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.pagination-bottom > div > div.-center > span.-pageInfo > span');
    let totalPages = parseInt(totalPagesText);
  
    // Iterate through all pages backwards 
    for (let i = totalPages; i >= 1; i--) {
      // Verify that we are on the correct page
      await validatePageShown(page, i.toString());
      // Click the "Next" button
      let previousButton = '#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.pagination-bottom > div > div.-previous > button'
      await clickDelayed(page, previousButton);
    }
  }, timeDelay)

  it('Validating previous button is disabled', async () => { 
    // Get the disabled attribute of the button
    let previousButton = '#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.pagination-bottom > div > div.-previous > button'
    let isDisabled = await page.$eval(previousButton, button => button.disabled);
    console.log(`Previous Button is disabled: ${isDisabled}`)
  
    // Assert that the button is disabled
    expect(isDisabled).toBe(true);
  }, timeDelay)
}, timeDelay)


