class pomPage {
    firstnumInput = "input[ng-model='first']"
    secondnumInput = "input[ng-model='second']"
    operator = "select[ng-model='operator']"
    goButton = "#gobutton"
    result = "h2.ng-binding"

    calculate(num1, num2, operator, expectedNum){
        cy.get(this.firstnumInput).type(num1)
        cy.get(this.operator).select(operator)
        cy.get(this.secondnumInput).type(num2)
        cy.get(this.goButton).click()
        cy.get(this.result).first().invoke('text').should('contains', expectedNum)
    }
}

export default pomPage