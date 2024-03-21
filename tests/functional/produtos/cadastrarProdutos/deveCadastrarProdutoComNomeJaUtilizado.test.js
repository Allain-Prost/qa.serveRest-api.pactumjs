const { assert } = require("../../../../constants")
const { postLogin } = require("../../../../core/src/service/login/postLogin.service")
const { postProdutos } = require("../../../../core/src/service/produtos/postProdutos.service")
const { postUsuarios } = require("../../../../core/src/service/usuarios/postUsuarios.service")
const { TC071 } = require("../../../../data/produtos/produtos.data")

describe('Produtos - Post', async () => {

	let login
	before('Deve realizar o cadastro de um administrador, realizar login e cadastrar um produto', async () => {
		await postUsuarios({nome: TC071.usuario.name, email: TC071.usuario.email, password: TC071.usuario.password, administrador: TC071.usuario.administrador})
		login = await postLogin({email: TC071.usuario.email, password: TC071.usuario.password})
		await postProdutos(login.json.authorization, TC071.produto.nomeRepetido, TC071.produto.preco, TC071.produto.descricao, TC071.produto.quantidade)
	})

	it('[TC-071] - Deve validar o cadastro de um produto com nome já utilizado', async () => {
		let produto = await postProdutos(login.json.authorization, TC071.produto.nomeRepetido, TC071.produto.preco, TC071.produto.descricao, TC071.produto.quantidade, 400)
		assert.equal(produto.json.message, TC071.cadastroProduto.message)
	})
})