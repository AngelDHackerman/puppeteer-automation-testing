# DemoQa

> In this case we are about to **test several features** of the DemoQa page using **puppeteer**, features such as the elemets, forms, alerts, accordians and so many more.
**Object Under Test:** [https://demoqa.com/](https://demoqa.com/)


<details>
  <summary><h2>Test Plan for DemoQA</h2></summary>

  **Objective:** The objective of this test plan is to validate the functionality and usability of the interactive elements on the QA demonstration webpage.

**Scope:** This test plan covers the following elements on the webpage:

- Elements
- Forms
- Alerts, Frame & Windows
- Widgets
- Interactions
- Book Store Application

**Approach:** Each of the above elements will be tested individually to ensure they function as expected. Automated tests using Puppeteer will be used to simulate user interaction with these elements, using desktop and mobile views.

**Test Strategy:**

1. **Elements:** Verify that all elements (buttons, text boxes, etc.) load correctly and respond to user interaction as expected.
2. **Forms:** Verify that forms accept user input and process it correctly. This includes input validation and verifying that success/error messages are displayed correctly.
3. **Alerts, Frame & Windows:** Verify that alerts display correctly and that frames and windows load and function as expected.
4. **Widgets:** Verify that widgets load correctly and function as expected.
5. **Interactions:** Verify that interactions (such as drag and drop) function correctly.
6. **Book Store Application:** Verify that the bookstore application loads correctly, that all links and buttons function as expected, and that the shopping cart functionality works correctly.

**Success Criteria:** Each of the above elements should function as expected with no errors. Any deviation from expected functionality will be considered a test failure.

**Schedule:** The tests will be performed in the following order: Elements, Forms, Alerts, Frame & Windows, Widgets, Interactions, Book Store Application. Each set of tests will be performed in a separate session to avoid interference between tests.

**Resources:** The tests will be performed using Puppeteer to automate user interactions. **A development environment with Node.js and Puppeteer installed will be required.**

**Risks:** The main risks to this test plan are changes to the QA demonstration webpage that could cause tests to fail. To mitigate this risk, the webpage will be reviewed before each test session to identify any changes that could affect the tests.

</details>

<details>
  <summary><h2>Test Cases For The Elements Section</h2></summary>

  <details>
    <summary><h3>Test Case 1: Text Box</h3></summary>

  **Test Objective:** Verify that the text box accepts user input and displays the results correctly.

  **Steps to Follow (Manual Testing):**

  1. Open the webpage **[https://demoqa.com/text-box](https://demoqa.com/text-box)** in a browser.
  2. Enter a name into the "Full Name" field.
  3. Enter an email into the "Email" field.
  4. Enter an address into the "Current Address" field.
  5. Enter another address into the "Permanent Address" field.
  6. Click the "Submit" button.
  7. Verify that the results are displayed correctly under "Output".

  **Expected Outcome:** After clicking "Submit", the results should be displayed under "Output" and should match the data you entered into the form fields.

  **Automation code using puppeteer is [here](https://github.com/AngelDHackerman/puppeteer-automation-testing/tree/master/DemoQa).**
  </details>





  <details>
    <summary><h3> Test Case 2: Check Box</h3></summary>

  **Test Objective:** Verify that the checkboxes can be selected and unselected, and that the correct output is displayed when a checkbox is selected.

  **Steps to Follow (Manual Testing):**

  1. Open the webpage **[https://demoqa.com/checkbox](https://demoqa.com/checkbox)** in a browser.
  2. Click on the toggle on the left of the directory “Home”; Desktop, Documents, Downloads should be displayed now. 
  3. Click on the left toggles of each of those new directories, under Documents 2 new directories should be shown now: WorkSpace & Office. 
  4. Click on the left toggle of those directories: WorkSpace & Office. 
  5. Now select one by one the files: Notes, Commands, React, Angular, Veu, Public, Private, Classified, General, Word File.doc and Excel File.doc. All check box should be marked now **(CREATE A VALIDATION FOR THE “you have selected” SECTION)**. 
  6. Now unselect all the files by clicking on the check box of the parent directory “Home”, now all files should be unselected. 
  7. Collapse all directories by clicking on the toggle of the parent directories:  Desktop, Documents, Downloads and then collapse the directory Home.

  **Expected Outcome:** After clicking on a checkbox, it should be selected and the correct output should be displayed in the "Checked and unchecked" box. If the checkbox is clicked again, it should be unselected and the output should be updated accordingly.
  </details>




  <details>
    <summary><h3>Test Case 3: Radio Button</h3></summary>

  **Test Objective:** Verify that the radio buttons can be selected and that the correct output is displayed when a radio button is selected.

  **Steps to Follow (Manual Testing):**

  1. Open the webpage **[https://demoqa.com/radio-button](https://demoqa.com/radio-button)** in a browser.
  2. Click on a radio button “yes”.
  3. Verify that the radio button is selected.
  4. Verify that the correct output is displayed below the radio buttons.
  5. Click on a radio button “Impressive”.
  6. Verify that the radio button is selected.
  7. Verify that the correct output is displayed below the radio buttons.

  **Expected Outcome:** After clicking on a radio button, it should be selected and the correct output should be displayed below the radio buttons. If another radio button is clicked, it should become selected and the previous one should be deselected, and the output should be updated accordingly.
  </details>




  <details>
    <summary><h3>Test Case 4: Web Tables</h3></summary>

  **Test Objective:** Verify that the web table displays the correct data and that the user can interact with the table as expected.

  **Steps to Follow (Manual Testing):**

  1. Open the webpage **[https://demoqa.com/webtables](https://demoqa.com/webtables)** in a browser.
  2. Verify that the table is displayed with the correct data.
  3. Click on the button “Delete” in the "Action" column for the first row (Cierra Vega) and verify that the row is removed. 
  4. Click on the button “Edit” in the "Action" column for the new first row (Kierra Gentry) and change the name to “Katrina” and her age is now “19”, click on submit button. Name has to be changed now to katrina with 19 years old
  5. Click on the “Add” button, fill out the first and last name with “Angel Hackerman”, email: angelhackerman@test.com, Age 27, salary 4000, department IT. Click on submit. A new row has to be created 
  6. In the input “type to search” type “Angel” and the new row created has to be displayed, make sure the first column if for “Angel Hackerman” 

  **Expected Outcome:** The table should display the correct data and the buttons in the "Action" column should function as expected. If there is an "Add" button, it should allow you to add a new row to the table, also we should be able to delete and edit the columns of the table. 
  </details>




  <details>
    <summary><h3>Test Case 5: Buttons</h3></summary>

  **Test Objective:** Verify that the buttons on the page respond correctly to user interactions.

  **Steps to Follow (Manual Testing):**

  1. Open the webpage **[https://demoqa.com/buttons](https://demoqa.com/buttons)** in a browser.
  2. Double click on the "Double Click Me" button and verify that the correct message is displayed.
  3. Right click on the "Right Click Me" button and verify that the correct message is displayed.
  4. Click on the "Click Me" button and verify that the correct message is displayed.

  **Expected Outcome:** After interacting with each button, the correct message should be displayed below the button. The "Double Click Me" button should display a message about a double click, the "Right Click Me" button should display a message about a right click, and the "Click Me" button should display a message about a click.
  </details>




  <details>
    <summary><h3>Test Case 6: Links</h3></summary>

  **Test Objective:** Verify that the links on the page respond correctly to user interactions and that the correct API status is received.

  **Steps to Follow (Manual Testing):**

  1. Open the webpage **[https://demoqa.com/links](https://demoqa.com/links)** in a browser.
  2. Click on “Home” and “HomeS9OAn” both should open a new tab and show you the home page. 
  3. Click on the "Created" link and verify that the correct API status is displayed.
  4. Repeat for the other links ("No Content", "Moved", "Bad Request", "Unauthorized", "Forbidden", "Not Found").

  **Expected Outcome:** After clicking on each link, the correct API status should be displayed. For example, after clicking on the "Created" link, the API status "201 Created" should be displayed.
  </details>

</details>



<details>
  <summary><h2>Test Cases For The Form Section</h2></summary> 

 <h3>Test Case 7: Automation Practice Form</h3>

**Test Objective:** Verify that the form on the page can be filled out correctly and that the correct output is displayed when the form is submitted.

**Steps to Follow (Manual Testing):**

1. Open the webpage **https://demoqa.com/automation-practice-form** in a browser.
2. Enter a first name into the "First Name" field.
3. Enter a last name into the "Last Name" field.
4. Enter an email into the "Email" field.
5. Select a gender.
6. Enter a mobile number into the "Mobile Number" field.
7. Enter a subject into the "Subjects" field.
8. Select a hobby.
9. Enter an address into the "Current Address" field.
10. Select a state from the "State" dropdown.
11. Select a city from the "City" dropdown.
12. Click the "Submit" button.
13. Verify that the correct output is displayed.

**Expected Outcome:** After filling out the form and clicking "Submit", the correct output should be displayed. This output should match the data you entered into the form fields.
</details>


<details>
  <summary><h2>Test Cases For The Form Section</h2></summary>
  <h3>Test Case 7: Automation Practice Form</h3>

**Test Objective:** Verify that the form on the page can be filled out correctly and that the correct output is displayed when the form is submitted.

**Steps to Follow (Manual Testing):**

1. Open the webpage **https://demoqa.com/automation-practice-form** in a browser.
2. Enter a first name into the "First Name" field.
3. Enter a last name into the "Last Name" field.
4. Enter an email into the "Email" field.
5. Select a gender.
6. Enter a mobile number into the "Mobile Number" field.
7. Enter a subject into the "Subjects" field.
8. Select a hobby.
9. Enter an address into the "Current Address" field.
10. Select a state from the "State" dropdown.
11. Select a city from the "City" dropdown.
12. Click the "Submit" button.
13. Verify that the correct output is displayed.

**Expected Outcome:** After filling out the form and clicking "Submit", the correct output should be displayed. This output should match the data you entered into the form fields.

</details>

<details>
<summary><h2>Test Cases For: Alerts, Frame & Windows</h2></summary>
  <details>
    <summary><h3>Test Case 8: Browser Windows</h3></summary>

**Test Objective:** Verify that the buttons on the page open new browser windows or tabs as expected.

**Steps to Follow (Manual Testing):**
  1. Open the webpage **https://demoqa.com/browser-windows** in a browser.
  2. Click on the "New Tab" button and verify that a new tab opens.
  3. Switch to the new tab and verify that it has the correct content.
  4. Repeat for the "New Window" and "New Window Message" buttons.

**Expected Outcome:** After clicking on each button, a new browser window or tab should open with the correct content. The "New Tab" button should open a new tab, the "New Window" button should open a new window, and the "New Window Message" button should open a new window with a message.
  </details>

  <details>
    <summary><h3>Test Case 9: Browser Alerts</h3></summary>
    
  **Test Objective:** Verify that the buttons on the page trigger the correct browser alerts and that the alerts display the correct messages.

  **Steps to Follow (Manual Testing):**

  1. Open the webpage **https://demoqa.com/alerts** in a browser.
  2. Click on the "Click me" button and verify that a browser alert appears.
  3. Verify that the alert displays the correct message.
  4. Dismiss the alert and verify that it closes correctly.
  5. Repeat for the other buttons alerts like the **5 seconds alert**.
  6. Click on the confirm box alert, once the alert is dismissed, make sure the confirmation message is shown.
  7. Click on the prompt box alert and write “Angel Hackerman”, and make sure the confirmation message says: “You entered Angel Hackerman”.

**Expected Outcome:** After clicking on each button, a browser alert should appear with the correct message. The alert should be dismissable and should close correctly when dismissed.
  </details>
</details>