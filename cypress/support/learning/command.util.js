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
// Cypress.Commands.add("login", (email, password) => { ... })
// -- This is calculator command --
Cypress.Commands.add("calculate", (num1, num2, operator, expectedNum) => {
cy.get("input[ng-model='first']").type(num1)
cy.get("select[ng-model='operator']").select(operator)
cy.get("input[ng-model='second']").type(num2)
cy.get("#gobutton").click()
cy.get("h2.ng-binding").first().invoke('text').should('contains', expectedNum)
})