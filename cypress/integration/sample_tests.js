describe('My First Test', function () {
    it('True Assertion', function () {
        expect(true).to.equal(true)
    })
})
describe('My Second Test', function () {
    it('False assertion', function () {
        expect(true).to.equal(false)
    })
})

/*
Arrange - setup initial app state
- visit a web page
- query for an element

Act - take an action
- interact with that element

Assert - make an assertion
-make an assertion about page content
*/

describe('My Third Test', function () {
    it('Interaction with sample website', function () {
        cy.visit('https://example.cypress.io')

        // cy.pause()
        cy.contains('type').click()

        cy.url()
            .should('include', '/commands/actions')

        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com')
    })
})
