/// <reference types="cypress" />
import PomPage from '../pages/pom.page'

describe("Calculator App POM", function(){
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
        const page = new PomPage()
        page.calculate(this.data.num1, this.data.num2, 'ADDITION', 15)
    })

    it("Subbtraction of two number", function() {
        const page = new PomPage()
        page.calculate(this.data.num1, this.data.num2, 'SUBTRACTION',5)
    })
})