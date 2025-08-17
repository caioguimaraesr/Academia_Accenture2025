import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

Given('que o usuário acessa a página Web Tables', () => {
    cy.visit('/')
})

When('clica em Add para adicionar um novo formulário de cadastro', () => {
    cy.acessarFormularioCadastro()

    cy.log('Usuário cadastrado com sucesso!')
})

Then('o sistema permanecerá no formulário de cadastro', () => {
    cy.permancerForms()
})

And('submete o cadastro', () => {
    cy.submitForms()
})