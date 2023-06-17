db.runCommand({
    insert: "clientes ",
    documents: [{
        "nome": "Gustavo Marcos dos Santos",
        "cpf": "936.261.726-94",
        "data_nascimento": "11/02/1957",
        "genero": "Masculino",
        "profissao": "Gerente de vendas",
        "endereco": "Rua Adelso Ferreira Tavares, número 661, Tubalina, Uberlândia, MG, 38412-010",
        "status_civil": "separado(a)"
    }],
    bypassDocumentValidation: true
});