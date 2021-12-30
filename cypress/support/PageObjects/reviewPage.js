const locs1 = require("../../locators.json")


class ReviewPage {

    validateReviewPage(){
       return cy.get(locs1.reviewPage.reviewPagevalid).should('have.text','Thanks for submitting the form')
    }

    notValidateReviewPage(){
        return cy.get(locs1.reviewPage.reviewPagevalid).should('not.exist')
     }
}
export default ReviewPage