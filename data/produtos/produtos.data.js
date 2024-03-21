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

const TC071 = {
	usuario: {
		name: faker.person.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    administrador: 'true',
	},
	produto: {
		nomeRepetido: faker.commerce.product(),
		preco: faker.commerce.price({ max: 1000 }),
		descricao: faker.commerce.productDescription(),
		quantidade: faker.number.int({ max: 1000 })
	},
	cadastroProduto: {
		message: 'Já existe produto com esse nome'
	}
}

const TC072 = {
	usuario: {
		name: faker.person.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    administrador: 'true',
	},
	produto: {
		nomeRepetido: faker.commerce.product(),
		preco: faker.commerce.price({ max: 1000 }),
		descricao: faker.commerce.productDescription(),
		quantidade: faker.number.int({ max: 1000 })
	},
	tokenVazio: '',
	cadastroProduto: {
		message: 'Token de acesso ausente, inválido, expirado ou usuário do token não existe mais'
	}
}

const TC073 = {
	usuario: {
		name: faker.person.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    administrador: 'false',
	},
	produto: {
		nomeRepetido: faker.commerce.product(),
		preco: faker.commerce.price({ max: 1000 }),
		descricao: faker.commerce.productDescription(),
		quantidade: faker.number.int({ max: 1000 })
	},
	cadastroProduto: {
		message: 'Rota exclusiva para administradores'
	}
}

module.exports = {
	TC070, TC071, TC072, TC073
}