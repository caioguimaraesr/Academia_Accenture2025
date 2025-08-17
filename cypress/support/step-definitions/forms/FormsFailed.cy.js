import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

When('o usuário preenche o formulário de cadastro com o campo do email inválido', () => {
    cy.formsEmailInvalido()
})

Then('o sistema permanecerá no formulário de cadastro', () => {
    cy.permancerForms()
})

And('o campo de email ficará vermelho indicando que está inválido', () => {
    cy.campoInvalido()
})

