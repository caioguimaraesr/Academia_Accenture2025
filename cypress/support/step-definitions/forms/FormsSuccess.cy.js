import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

When('preenche todos os campos obrigatórios com dados válidos', () => {
    cy.formsComDadosValidos()
})

And('clica no icone de editar do usuario desejado', () => {
    cy.clickEditIcon()
})

Then('o sistema exibirá o usuario cadastrado na tabela', () => {
    cy.validarUsuario()
})

When('o usuario edita todos os dados ja cadastrados', () => {
    cy.editarDadosCadastrados()
})

Then('o sistema exibirá todos os dados do usuário editado', () => {
    cy.validarUsuario()
})

When('clica no icone de excluir do usuario desejado', () => {
    cy.clickRemoveIcon()
})

Then('o usuário selecionado não estará mais presente na tabela', () => {
    cy.validarUsuarioDeletado()
})