/// <reference types="cypress" />

describe("Calculator App", function(){
    before(function () {
      })
      

    beforeEach(function(){
        /**
         * If fixture is required to use in every it-block then
         * it must be defined in the before each class
         */
        cy.fixture('learning/command').then(function(data){
            this.data=data
            cy.visit(this.data.url)
        })
    })

    it("Addition of two number", function() {
        cy.calculate(this.data.num1, this.data.num2, 'ADDITION', 15)
    })

    it("Subtraction of two number", function() {
        cy.calculate(this.data.num1, this.data.num2, 'SUBTRACTION', 5)
    })

    it("Multiplication of two number", function() {
        cy.calculate(this.data.num1, this.data.num2, 'MULTIPLICATION', 50)
    })

    it("Division of two number", function() {
        cy.calculate(this.data.num1, this.data.num2, 'DIVISION', 2)
    })

    after(function() {
        cy.log('Stoping Calculator Regression Suite')
    })
})