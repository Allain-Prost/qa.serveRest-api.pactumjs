const { specPactumJs } = require("../../../../constants");

async function getProdutos({ id, nome, preco, descricao, quantidade, statusCodeResponse = 200 }) {
    const queryParams = {};
    
    if (id !== undefined) queryParams["_id"] = id;
    if (nome !== undefined) queryParams["nome"] = nome;
    if (preco !== undefined) queryParams["preco"] = preco;
    if (descricao !== undefined) queryParams["descricao"] = descricao;
    if (quantidade !== undefined) queryParams["quantidade"] = quantidade;

    return await specPactumJs()
        .get(`${process.env.BASE_URL}/produtos`)
        .withQueryParams(queryParams)
        .expectStatus(statusCodeResponse);
}

module.exports = {
    getProdutos
}