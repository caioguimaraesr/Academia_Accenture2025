#utf-8
#language: pt

Funcionalidade: Gerenciamento da Tabela da Web FAILED

    Cenário: Tentativa de realizar o cadastro do formulário com email inválido
        Dado que o usuário acessa a página Web Tables
        E clica em Add para adicionar um novo formulário de cadastro
        Quando o usuário preenche o formulário de cadastro com o campo do email inválido
        E submete o cadastro
        Então o sistema permanecerá no formulário de cadastro
        E o campo de email ficará vermelho indicando que está inválido