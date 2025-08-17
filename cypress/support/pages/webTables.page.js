import { faker } from "@faker-js/faker"

const BTN_ADD = '#addNewRecordButton'
const TABLE_USER = '.rt-table'
const BTN_SUBMIT = '#submit'
const BNT_EDIT_1 = '#edit-record-1'
const BTN_DELETE_1 = '#delete-record-1'
const H1_FORMS = '#registration-form-modal'

const SELECT_FORMS = {
    FIRST_NAME: '#firstName',
    LAST_NAME: '#lastName',
    EMAIL: '#userEmail',
    AGE: '#age',
    SALARY: '#salary',
    DEPARTAMENT: '#department'
}

function gerarDadosFakes() {
    return { 
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        age: faker.number.int({min: 1, max:120}),
        salary: faker.number.int({ min: 500, max: 50000 }),
        department: faker.helpers.arrayElement(["Compliance", "Legal", "Insurance"])
    }
}

function preencherDados(dados) {
    cy.get(SELECT_FORMS.FIRST_NAME).should('be.visible').clear().type(dados.firstName)
    cy.get(SELECT_FORMS.LAST_NAME).should('be.visible').clear().type(dados.lastName)
    cy.get(SELECT_FORMS.EMAIL).should('be.visible').clear().type(dados.email)
    cy.get(SELECT_FORMS.AGE).should('be.visible').clear().type(dados.age)
    cy.get(SELECT_FORMS.SALARY).should('be.visible').clear().type(dados.salary)
    cy.get(SELECT_FORMS.DEPARTAMENT).should('be.visible').clear().type(dados.department)
}

Cypress.Commands.add('acessarFormularioCadastro', () => {
    cy.get(BTN_ADD).should('be.visible').click();
})

Cypress.Commands.add('formsComDadosValidos', () => {
    const dadosUsuario = gerarDadosFakes()
    preencherDados(dadosUsuario)
    Cypress.env('userData', { ...dadosUsuario })
})

Cypress.Commands.add('submitForms', () => {
    cy.get(BTN_SUBMIT).should('be.visible').click()
})
    
Cypress.Commands.add('validarUsuario', () => {
    const userData = Cypress.env('userData')

    cy.get(TABLE_USER)
    .should('contain' , userData.firstName, {log: false})
    .and('contain', userData.lastName, {log: false})
    .and('contain', userData.age, {log: false})
    .and('contain', userData.email, {log: false})
    .and('contain', userData.salary, {log: false})
    .and('contain', userData.department, {log: false})
})

Cypress.Commands.add('clickEditIcon', () => {
    cy.get(BNT_EDIT_1).should('be.visible').click()
})

Cypress.Commands.add('editarDadosCadastrados', () => {
    const novosDadosUsuario = gerarDadosFakes()
    preencherDados(novosDadosUsuario)
    Cypress.env('userData', { ...novosDadosUsuario })
})

Cypress.Commands.add('clickRemoveIcon', () => {
    cy.get(BTN_DELETE_1).should('be.visible').click()
})

Cypress.Commands.add('validarUsuarioDeletado', () => {
    cy.get(TABLE_USER)
    .should('not.contain' , Cypress.env('DELETE_FIRST_NAME'), {log: false})
    .and('not.contain', Cypress.env('DELETE_LAST_NAME'), {log: false})
    .and('not.contain', Cypress.env('DELETE_EMAIL'), {log: false})
})

Cypress.Commands.add('formsEmailInvalido', () => {
    cy.get(SELECT_FORMS.FIRST_NAME).clear().type(Cypress.env('FIRST_NAME'), {log: false})
    cy.get(SELECT_FORMS.LAST_NAME).clear().type(Cypress.env('LAST_NAME'), {log: false})
    cy.get(SELECT_FORMS.EMAIL).clear().type(Cypress.env('USER_EMAIL_INVALID'), {log: false})
    cy.get(SELECT_FORMS.AGE).clear().type(Cypress.env('AGE'), {log: false})
    cy.get(SELECT_FORMS.SALARY).clear().type(Cypress.env('SALARY'), {log: false})
    cy.get(SELECT_FORMS.DEPARTAMENT).clear().type(Cypress.env('DEPARTMENT'), {log: false})
})
s
Cypress.Commands.add('permancerForms', () => {
    cy.get(H1_FORMS).should('be.visible')
})

Cypress.Commands.add('campoInvalido', () => {
    cy.get(SELECT_FORMS.EMAIL).should('have.css', 'border-color', 'rgb(220, 53, 69)')
})