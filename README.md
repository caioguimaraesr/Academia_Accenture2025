# 🚀 Desafio Cypress - Academia Accenture 2025

Este projeto tem como objetivo automatizar testes end-to-end utilizando [Cypress](https://www.cypress.io/) com o padrão BDD (Behavior Driven Development) através do `cypress-cucumber-preprocessor`. Os testes simulam o gerenciamento de usuários em uma tabela web, incluindo cadastro, edição, exclusão e validação de campos obrigatórios.

## 🛠️ Tecnologias
<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo" />
  <img width="12" />
  <img src="https://raw.githubusercontent.com/cypress-io/cypress-icons/master/src/logo/cypress-io-logo-round.svg" height="40"     alt="cypress logo" />
  <img src="https://www.svgrepo.com/download/447199/cucumber-organic.svg" height="40" alt="Cucumber logo" />
</div>

## 📌 Pré-requisitos

- [Node.js](https://nodejs.org/) (versão recomendada: 18.x ou superior)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node)

## 📑 Cenários

   - **cypress/e2e/formsFailed.feature**: Contém os cenários que simulam falhas durante o preenchimento do formulário de cadastro.
   -**cypress/e2e/formsSuccess.feature**: ontém os cenários que verificam o preenchimento bem-sucedido do formulário de cadastro.

## 📂 Estrutura do Projeto

- **cypress/e2e/**: Features e cenários de teste em Gherkin.
- **cypress/support/**: Comandos customizados, páginas e definições de passos.
- **cypress/fixtures/**: Dados mockados para testes.
- **cypress.env.json**: Variáveis de ambiente para os testes.

## ⚡Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/caioguimaraesr/Academia_Accenture2025.git
   cd Academia_Accenture2025
   ```

2. **Instale as dependências:**
    ```bash
    npm install
    ```

## ▶️ Executando os Testes
3. **Modos de execução:**
   - Abrir o Cypress em modo interativo
   ```bash
   npx cypress open
   ```

   - Abrir o Cypress no modo headless
   
   ```bash
   npx cypress run
   ```

### 📝 Observações
* Os testes utilizam o site DemoQA Web Tables como base.
* Os cenários estão descritos nos arquivos .feature dentro de cypress/e2e/.
* Para adicionar novos cenários, crie arquivos .feature e defina os passos em cypress/* * support/step-definitions/.

### 📦 Dependências Principais
* cypress
* cypress-cucumber-preprocessor
* @faker-js/faker