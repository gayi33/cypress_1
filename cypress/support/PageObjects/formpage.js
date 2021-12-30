const locs = require("../../locators.json")
const data = require('../../fixtures/example.json')

class FormPage {

    navigateToform(){
        return cy.visit(Cypress.env('secondurl'));
    }

    typeFirstName(){
        cy.log(data.fields.uname)

        return cy.get(locs.formpage.frstName).type(data.fields.uname)
    }


    typeLastName(){
        return cy.get(locs.formpage.lastName).type(data.fields.ulname);
    }

    typeEmail(){
        return cy.get(locs.formpage.uemail).type(data.fields.uemail)
    }

    selectGender(){
        // return cy.get('input#gender-radio-2').check().should('be.checked')
        return cy.get(locs.formpage.eGender).eq(0).check({force:true})
    }

    typeMobileNo(){
        return cy.get(locs.formpage.eMobileNo).type(data.fields.umobile)
    }

    enterDOB(){
         return cy.get(locs.formpage.eDOB).click()
    }

    enterDOB_month(){
        return cy.get(locs.formpage.eMonth).select('April')
    }
    
    enterDOB_year(){
        return cy.get(locs.formpage.eYear).select('2011')
    }
    enterDOB_date(){
        return cy.get(locs.formpage.eDate).click()
    }

    selectHoby(){
        return cy.get(locs.formpage.eHoby).eq(1).check({force:true})
    }

    openState(){
        return cy.get(locs.formpage.eState).click()
    }
    selectState(){
        return cy.get(locs.formpage.sState).click()
    }

    openCity(){
        return cy.get(locs.formpage.eCity).click()
    }

    selectCity(){
        return cy.get(locs.formpage.sCity).click()
    }

    clickSubmit(){
        cy.get(locs.formpage.eSubmit).click()
    }
}
export default FormPage  