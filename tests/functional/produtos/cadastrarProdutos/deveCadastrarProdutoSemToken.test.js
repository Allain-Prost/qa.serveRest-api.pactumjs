const { assert } = require("../../../../constants")
const { postProdutos } = require("../../../../core/src/service/produtos/postProdutos.service")
const { postUsuarios } = require("../../../../core/src/service/usuarios/postUsuarios.service")
const { TC072 } = require("../../../../data/produtos/produtos.data")

describe('Produtos - Post', async () => {

	before('Deve realizar o cadastro de um administrador e realizar login', async () => {
		await postUsuarios({nome: TC072.usuario.name, email: TC072.usuario.email, password: TC072.usuario.password, administrador: TC072.usuario.administrador})
	})

	it('[TC-072] - Deve validar o cadastro de um produto sem token de autorização', async () => {
		let produto = await postProdutos(TC072.tokenVazio, TC072.produto.nome, TC072.produto.preco, TC072.produto.descricao, TC072.produto.quantidade, 401)
		assert.equal(produto.json.message, TC072.cadastroProduto.message)
	})
})