/// <reference types = "Cypress" />

describe('get api user test', () => {

    it('get users test', () => {
        cy.request({
            method : 'GET',
            url : 'https://gorest.co.in/public/v1/users',
            headers : {
                'authorization' : 'Bearer 80012801f481fd68fd7ac3b33d2bf3a51dd5437d544fd8c00b4892578436f945'
            }
        }).then((res) =>{
            expect(res.status).to.eq(200)
            expect(res.body.meta.pagination.limit).to.eq(20)
        })
    })    
})