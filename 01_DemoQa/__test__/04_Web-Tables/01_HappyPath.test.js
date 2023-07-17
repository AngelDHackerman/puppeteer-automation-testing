const puppeteer = require('puppeteer');
const {click, type, getText, clickDelayed, clearInput} = require('../../libs/helpers')
const timeDelay = 17_000_000
const afterAllDelay = 4_000
let typeDelay = { delay: 100}
let browser 
let page 

describe('Web Tables Happy Path: adding, searching and removing information', () => { 

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
  it ('Removing first row, modifying the last one: ', async () => { 

    // Removing first row 
    await clickDelayed(page, '#delete-record-1')
    // Editing "last" row
    await clickDelayed(page, '#edit-record-3')
    // Changing name
    await clearInput(page, '#firstName')
    await type(page, '#firstName', 'Katrina', typeDelay)
    // Changing age
    await clearInput(page, '#age')
    await type(page, '#age', '19', typeDelay)
    // submit new information
    await click(page, '#submit')

  }, timeDelay);

  it('Validation of the changes', async () => { 
    const nameSelector = '#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-tbody > div:nth-child(2) > div > div:nth-child(1)';
    const ageSelector = '#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-tbody > div:nth-child(2) > div > div:nth-child(3)';
  
    const name = await getText(page, nameSelector);
    const age = await getText(page, ageSelector);
  
    expect(name).toBe('Katrina');
    expect(age).toBe('19');
    await page.waitForTimeout(1000);
  }, timeDelay);


  it('Adding a new row, Angel Hackerman', async () => { 

    await clickDelayed(page, '#addNewRecordButton')
    await page.waitForSelector('body > div.fade.modal.show > div > div')
    // Adding the info for new row. 
    await type(page, '#firstName', 'Angel', typeDelay)
    await type(page, '#lastName', 'Hackerman', typeDelay)
    await type(page, '#userEmail', 'AngelHackerman@test.com', typeDelay)
    await type(page, '#age', '27', typeDelay)
    await type(page, '#salary', '4000', typeDelay)
    await type(page, '#department', 'QA Automation Team', typeDelay)

    await click(page, '#submit')


  }, timeDelay);

  it('Validation new added row, Angel Hackerman', async () => { 
    const nameSelector = '#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-tbody > div:nth-child(3) > div > div:nth-child(1)'
    const familySelector = '#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-tbody > div:nth-child(3) > div > div:nth-child(2)'
    const ageSelector = '#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-tbody > div:nth-child(3) > div > div:nth-child(3)'
    const emailSelector = '#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-tbody > div:nth-child(3) > div > div:nth-child(4)'
    const salarySelector = '#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-tbody > div:nth-child(3) > div > div:nth-child(5)'
    const departmentSelector = '#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-tbody > div:nth-child(3) > div > div:nth-child(6)'
  
    const name = await getText(page, nameSelector)
    const lastName = await getText(page, familySelector)
    const age = await getText(page, ageSelector)
    const email = await getText(page, emailSelector)
    const salary = await getText(page, salarySelector)
    const department = await getText(page, departmentSelector)
  
    expect(name).toBe('Angel')
    expect(lastName).toBe('Hackerman')
    expect(age).toBe('27')
    expect(email).toBe('AngelHackerman@test.com')
    expect(salary).toBe('4000')
    expect(department).toBe('QA Automation Team')
  }, timeDelay);
  
}, timeDelay)
