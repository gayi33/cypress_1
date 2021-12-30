import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import FormPage from "../../support/PageObjects/formpage";
import ReviewPage from "../../support/PageObjects/reviewPage";
import uname from "../../fixtures/example.json"



var fp = new FormPage()
var rp = new ReviewPage()

Given('open the Form', () =>{
   fp.navigateToform()
})

And('Enter the FirstName, LastName and Email', () =>{
   fp.typeFirstName()
   fp.typeEmail()
   fp.typeLastName()
})

And('Select Gender', () =>{
    fp.selectGender()
})

And('Enter Mobile Number', () =>{
    fp.typeMobileNo()
})

And('Enter DOB', () =>{
    fp.enterDOB()
    fp.enterDOB_month()
    cy.wait(2000)
    fp.enterDOB_year()
    cy.wait(2000)
    fp.enterDOB_date()
    cy.wait(2000)

})

And('Select Hobbies', () =>{
    fp.selectHoby()
})

And('Select State and City', () =>{
    fp.openState()
    cy.wait(2000)
    fp.selectState()
    cy.wait(2000)
    fp.openCity()
    cy.wait(2000)
    fp.selectCity()
})

Then('Click on Submit', () => {
    fp.clickSubmit()
})

Then('Review page is open', () =>{
    rp.validateReviewPage()
})

Then('Review is not open', () => {
    rp.notValidateReviewPage()
})