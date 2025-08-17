#utf-8
#language: pt

Funcionalidade: Gerenciamento da Tabela da Web FAILED

    Contexto:
        Dado que o usuário acessa a página Web Tables
        E clica em Add para adicionar um novo formulário de cadastro
    
    Cenário: Tentativa de preencher o formulário com email inválido
        Quando o usuário preenche o formulário de cadastro com o campo do email inválido
        E submete o cadastro
        Então o sistema permanecerá no formulário de cadastro
        E o campo de email ficará vermelho indicando que está inválido

    Cenário: Tentativa de preencher o formulário sem preencher os campos obrigatórios
        Quando o usuário preenche o formulário de cadastro sem preencher os campos obrigatórios
        E submete o cadastro
        Então o sistema permanecerá no formulário de cadastro
        E os campos obrigatórios ficarão vermelhos indicando que estão inválidos

    Cenário: Tentativa de preencher o campo de salário com um número negativo
        Quando o usuário preenche o campo de salario com um número negativo
        E submete o cadastro
        Então o sistema permanecerá no formulário de cadastro
        E o campo de salario ficará vermelho indicando que está invalido

    Cenário: Tentativa de preencher o campo da idade com um número negativo
        Quando o usuário preenche o campo de idade com um número negativo
        E submete o cadastro
        Então o sistema permanecerá no formulário de cadastro
        E o campo de idade ficará vermelho indicando que está invalido