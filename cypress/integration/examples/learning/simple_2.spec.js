/// <reference types="cypress" />

describe("Calculator App", function(){
    before(function () {
        cy.fixture('learning/simple_2').then(function(data){
            this.data=data
            cy.visit(this.data.url)
        })
      })
      

    beforeEach(function(){
        cy.get("input[ng-model='first']").as('firstInput')
        cy.get("select[ng-model='operator']").as('operator')
        cy.get("input[ng-model='second']").as('secondInput')
        cy.get("#gobutton").as('goButton')
        cy.get("h2.ng-binding").as('result')
    })

    it("Addition of two number", function() {
        cy.get("@firstInput").type(this.data.addFistNumber)
        cy.get("@operator").select('ADDITION')
        cy.get("@secondInput").type(this.data.addSecondNumber)
        cy.get("@goButton").click()
        cy.get("@result").first().invoke('text').should('contains', 3)

    })

    it("Subtraction of two number",function() {
        cy.get("@firstInput").type(10)
        cy.get("@operator").select('SUBTRACTION')
        cy.get("@secondInput").type(5)
        cy.get("@goButton").click()
        cy.get("@result").invoke('text').should('contains', 5)
    })

    it("Multiplication of two number",function() {
        cy.get("@firstInput").type(10)
        cy.get("@operator").select('MULTIPLICATION')
        cy.get("@secondInput").type(5)
        cy.get("@goButton").click()
        cy.get("@result").invoke('text').should('contains', 50)
    })

    it("Division of two number",function() {
        cy.get("@firstInput").type(10)
        cy.get("@operator").select('DIVISION')
        cy.get("@secondInput").type(5)
        cy.get("@goButton").click()
        cy.get("@result").invoke('text').should('contains', 2)
    })

    after(function() {
        cy.log('Stoping Calculator Regression Suite')
    })
})