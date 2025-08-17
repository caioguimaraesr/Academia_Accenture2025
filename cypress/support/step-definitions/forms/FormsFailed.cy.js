import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

When('o usuário preenche o formulário de cadastro com o campo do email inválido', () => {
    cy.formsEmailInvalido()
})

And('o campo de email ficará vermelho indicando que está inválido', () => {
    cy.campoInvalido()
})

When('o usuário preenche o formulário de cadastro sem preencher os campos obrigatórios', () => {
    cy.formsCamposVazios()
})

And('os campos obrigatórios ficarão vermelhos indicando que estão inválidos', () => {
    cy.verificarCamposInvalidos()
})

When('o usuário preenche o campo de salario com um número negativo', () => {
    cy.campoSalarioNegativo()
})

When('o usuário preenche o campo de idade com um número negativo', () => {
    cy.campoIdadeNegativo()
})

And('o campo de salario ficará vermelho indicando que está invalido', () => {
    cy.apenasSalarioInvalido()
})

And('o campo de idade ficará vermelho indicando que está invalido', () => {
    cy.apenasIdadeInvalido()
})