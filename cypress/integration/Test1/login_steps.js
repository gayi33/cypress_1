import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";

Given('open the Login page of Application', () => {
    cy.visit(Cypress.env('thirdurl'))
    cy.wait(1500);
    // cy.scrollTo(0, 500)
    cy.contains('Login').click()
})
    
And('Enter the Username' , () => {
    cy.get('#Username').type('Gayatri')
    cy.wait(1500);

})  

And('Enter the Password' , () => {
    cy.get('#Password').type('Gayatri@123')   
    cy.wait(1500);
   
})

Then('Click on Login', () =>{
    cy.get('[type ="submit"][value ="Login"]').click()
    cy.wait(5000); 
})

Then('Dashboard board page is open', () => {
    cy.title().should('eq','- Testautomation practice page')
})



















