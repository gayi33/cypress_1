// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// import DatePickerPage from './pages/DatePickerPage';

// var datePickerPage = new DatePickerPage;

Cypress.Commands.add('loginWith', (username, password) =>{

    cy.visit(Cypress.env('frsturl'))
    cy.get('#Username').type(username)
    cy.get('#Password').type(password)   
    cy.get('[type ="submit"][value ="Login"]').click()
})

// Cypress.Commands.add('selectYear', (yearName) => {
//     datePickerPage.getYearName().then(($year) => {
//         if($year.text()==yearName){
//             cy.log(yearName+ 'year is selected')
//         }
//     })
// })
