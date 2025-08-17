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
        age: faker.number.int({min: 1, max: 99}),
        salary: faker.number.int({ min: 500, max: 50000 }),
        department: faker.helpers.arrayElement(["Compliance", "Legal", "Insurance"])
    }
}

function preencherDados(dados) {
    cy.get(SELECT_FORMS.FIRST_NAME).clear().type(dados.firstName, {log: false})
    cy.get(SELECT_FORMS.LAST_NAME).clear().type(dados.lastName, {log: false})
    cy.get(SELECT_FORMS.EMAIL).clear().type(dados.email, {log: false})
    cy.get(SELECT_FORMS.AGE).clear().type(dados.age, {log: false})
    cy.get(SELECT_FORMS.SALARY).clear().type(dados.salary, {log: false})
    cy.get(SELECT_FORMS.DEPARTAMENT).clear().type(dados.department, {log: false})
}

Cypress.Commands.add('acessarFormularioCadastro', () => {
    cy.get(BTN_ADD).should('be.visible').click();
})

Cypress.Commands.add('formsComDadosValidos', () => {
    const dadosUsuario = gerarDadosFakes()
    Cypress.env('dadosUsuario', { ...dadosUsuario })
    preencherDados(dadosUsuario)
})

Cypress.Commands.add('submitForms', () => {
    cy.get(BTN_SUBMIT).should('be.visible').click()
})
    
Cypress.Commands.add('validarUsuario', () => {
    const dadosUsuario = Cypress.env('dadosUsuario')

    cy.get(TABLE_USER)
    .should('contain' , dadosUsuario.firstName)
    .and('contain', dadosUsuario.lastName)
    .and('contain', dadosUsuario.age)
    .and('contain', dadosUsuario.email)
    .and('contain', dadosUsuario.salary)
    .and('contain', dadosUsuario.department)
})

Cypress.Commands.add('clickEditIcon', () => {
    cy.get(BNT_EDIT_1).should('be.visible').click()
})

Cypress.Commands.add('editarDadosCadastrados', () => {
    const novosDadosUsuario = gerarDadosFakes()
    Cypress.env('dadosUsuario', { ...novosDadosUsuario })
    preencherDados(novosDadosUsuario)
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
    const dados = {
        firstName: Cypress.env('FIRST_NAME'),
        lastName: Cypress.env('LAST_NAME'),
        email: Cypress.env('USER_EMAIL_INVALID'),
        age: Cypress.env('AGE'),
        salary: Cypress.env('SALARY'),
        department: Cypress.env('DEPARTMENT')
    }

    preencherDados(dados)
})

Cypress.Commands.add('permancerForms', () => {
    cy.get(H1_FORMS).should('be.visible')
})

Cypress.Commands.add('campoInvalido', () => {
    cy.get(SELECT_FORMS.EMAIL).should('have.css', 'border-color', 'rgb(220, 53, 69)')
})

Cypress.Commands.add('formsCamposVazios', () => {
    cy.get(SELECT_FORMS.FIRST_NAME).clear().should('have.value', '')
    cy.get(SELECT_FORMS.LAST_NAME).clear().should('have.value', '')
    cy.get(SELECT_FORMS.EMAIL).clear().should('have.value', '')
    cy.get(SELECT_FORMS.AGE).clear().should('have.value', '')
    cy.get(SELECT_FORMS.SALARY).clear().should('have.value', '')
    cy.get(SELECT_FORMS.DEPARTAMENT).clear().should('have.value', '')
})

Cypress.Commands.add('verificarCamposInvalidos', () => {
    cy.get(SELECT_FORMS.FIRST_NAME).should('have.css', 'border-color', 'rgb(220, 53, 69)')
    cy.get(SELECT_FORMS.LAST_NAME).should('have.css', 'border-color', 'rgb(220, 53, 69)')
    cy.get(SELECT_FORMS.EMAIL).should('have.css', 'border-color', 'rgb(220, 53, 69)')
    cy.get(SELECT_FORMS.AGE).should('have.css', 'border-color', 'rgb(220, 53, 69)')
    cy.get(SELECT_FORMS.SALARY).should('have.css', 'border-color', 'rgb(220, 53, 69)')
    cy.get(SELECT_FORMS.DEPARTAMENT).should('have.css', 'border-color', 'rgb(220, 53, 69)')
})

Cypress.Commands.add('campoSalarioNegativo', () => {
    const dados = {
        firstName: Cypress.env('FIRST_NAME'),
        lastName: Cypress.env('LAST_NAME'),
        email: Cypress.env('EMAIL'),
        age: Cypress.env('AGE'),
        salary: Cypress.env('USER_SALARY_INVALID'),
        department: Cypress.env('DEPARTMENT')
    }
    
    preencherDados(dados)
})

Cypress.Commands.add('campoIdadeNegativo', () => {
    const dados = {
        firstName: Cypress.env('FIRST_NAME'),
        lastName: Cypress.env('LAST_NAME'),
        email: Cypress.env('EMAIL'),
        age: Cypress.env('USER_AGE_INVALID'),
        salary: Cypress.env('SALARY'),
        department: Cypress.env('DEPARTMENT')
    }
    
    preencherDados(dados)
})

Cypress.Commands.add('apenasSalarioInvalido', () => {
    cy.get(SELECT_FORMS.SALARY).should('have.css', 'border-color', 'rgb(220, 53, 69)')
})

Cypress.Commands.add('apenasIdadeInvalido', () => {
    cy.get(SELECT_FORMS.AGE).should('have.css', 'border-color', 'rgb(220, 53, 69)')
})