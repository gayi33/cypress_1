import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";

Given('open the Application and Login', () =>{
    cy.loginWith('Gayatri', 'Gayatri@123')
    cy.wait(5000); 
})

Then('Dashboard board page is open', () => {
    cy.title().should('eq','- Testautomation practice page')
})

And('Click on Automation Practice Form',() => {
    cy.contains('Test Automation').click()
})

And('Enter the Name',() => {
    cy.get('#name').type("ABC")
})

And('Enter the Mobile Number',() => {
    cy.get('#phone').type(12345678)
})

And('Enter the Address',() => {
    cy.get('#address').type('STNR')
})

And('Select Radio Button',() => {
    // cy.get('[type="radio"]').check('Female') 
    cy.get('#female').check().should('be.checked')

})

And('Select CheckBox',() => {
    cy.get('#tuesday').check().should('be.checked')
    cy.get('[type="checkbox"]').first().check() 
})

And('Select dropdown value from the list',() => {
    cy.get('select').select('Turkey') 
})