#utf-8
#language: pt

Funcionalidade: Gerenciamento da Tabela da Web SUCCESS

    Contexto:
        Dado que o usuário acessa a página Web Tables

    Cenário: Realizar o preenchimento do formulário de cadastro
        E clica em Add para adicionar um novo formulário de cadastro
        Quando preenche todos os campos obrigatórios com dados válidos
        E submete o cadastro
        Então o sistema exibirá o usuario cadastrado na tabela

    Cenário: Realizar alteração de dados do formulário de cadastro
        E clica no icone de editar do usuario desejado
        Quando edita todos os dados ja cadastrados
        E submete o cadastro
        Então o sistema exibirá todos os dados do usuário editado
    
    Cenário: Realizar a exclusão do usuário no formulário de cadastro
        Quando clica no icone de excluir do usuario desejado
        Então o usuário selecionado não estará mais presente na tabela