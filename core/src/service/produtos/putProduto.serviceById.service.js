const { specPactumJs } = require("../../../../constants");

async function putProdutos(authorization, id, produto, statusCodeResponse = 200) {
	return await specPactumJs()
		.put(`${process.env.BASE_URL}/produtos/{_id}`)
		.withPathParams("_id", id)
		.withHeaders("Authorization", authorization)
		.withBody(produto)
		.expectStatus(statusCodeResponse)
}

module.exports = {
	putProdutos
}