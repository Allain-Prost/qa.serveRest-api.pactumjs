const { faker } = require("@faker-js/faker");

const TC070 = {
	usuario: {
		name: faker.person.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    administrador: 'true',
	},
	produto: {
		nome: faker.commerce.product(),
		preco: faker.commerce.price({ max: 1000 }),
		descricao: faker.commerce.productDescription(),
		quantidade: faker.number.int({ max: 1000 })
	},
	cadastroProduto: {
		message: 'Cadastro realizado com sucesso'
	}
}

module.exports = {
	TC070
}