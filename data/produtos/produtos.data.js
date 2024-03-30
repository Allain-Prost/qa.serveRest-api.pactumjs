const { faker } = require("@faker-js/faker");

const TC070 = {
	usuario: {
		name: faker.person.firstName(),
		email: faker.internet.email(),
		password: faker.internet.password(),
		administrador: 'true',
	},
	produto: {
		nome: `${faker.commerce.product()}${faker.number.int({ max: 1000 })}`,
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
		nomeRepetido: `${faker.commerce.product()}${faker.number.int({ max: 1000 })}`,
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

const TC081 = {
	usuario: {
		name: faker.person.firstName(),
		email: faker.internet.email(),
		password: faker.internet.password(),
		administrador: 'true',
	},
	produto: {
		nome: `${faker.commerce.product()}${faker.number.int({ max: 1000 })}`,
		preco: faker.commerce.price({ max: 1000 }),
		descricao: faker.commerce.productDescription(),
		quantidade: faker.number.int({ max: 1000 })
	},
	cadastroProduto: {
		message: ''
	}
}

const TC082 = {
	usuario: {
		name: faker.person.firstName(),
		email: faker.internet.email(),
		password: faker.internet.password(),
		administrador: 'true',
	},
	produto: {
		nome: `${faker.commerce.product()}${faker.number.int({ max: 1000 })}`,
		preco: faker.commerce.price({ max: 1000 }),
		descricao: faker.commerce.productDescription(),
		quantidade: faker.number.int({ max: 1000 })
	},
	cadastroProduto: {
		message: ''
	}
}

const TC080 = {
	usuario: {
		name: faker.person.firstName(),
		email: faker.internet.email(),
		password: faker.internet.password(),
		administrador: 'true',
	},
	produto: {
		nome: `${faker.commerce.product()}${faker.number.int({ max: 1000 })}`,
		preco: faker.commerce.price({ max: 1000 }),
		descricao: faker.commerce.productDescription(),
		quantidade: faker.number.int({ max: 1000 })
	}
}

const TC083 = {
	usuario: {
		name: faker.person.firstName(),
		email: faker.internet.email(),
		password: faker.internet.password(),
		administrador: 'true',
	},
	produto: {
		nome: `${faker.commerce.product()}${faker.number.int({ max: 1000 })}`,
		preco: faker.commerce.price({ max: 1000 }),
		descricao: faker.commerce.productDescription(),
		quantidade: faker.number.int({ max: 1000 })
	}
}

const TC090 = {
	usuario: {
		name: faker.person.firstName(),
		email: faker.internet.email(),
		password: faker.internet.password(),
		administrador: 'true',
	},
	produto: {
		nome: `${faker.commerce.product()}${faker.number.int({ max: 1000 })}`,
		preco: faker.commerce.price({ max: 1000 }),
		descricao: faker.commerce.productDescription(),
		quantidade: faker.number.int({ max: 1000 })
	},
	messagem: 'Registro excluído com sucesso'
}

const TC091 = {
	usuario: {
		name: faker.person.firstName(),
		email: faker.internet.email(),
		password: faker.internet.password(),
		administrador: 'true',
	},
	idInexistente: 'idInexistente123',
	messagem: 'Nenhum registro excluído'
}

const TC092 = {
	usuario: {
		name: faker.person.firstName(),
		email: faker.internet.email(),
		password: faker.internet.password(),
		administrador: 'true',
	},
	produto: {
		nome: `${faker.commerce.product()}${faker.number.int({ max: 1000 })}`,
		preco: faker.commerce.price({ max: 1000 }),
		descricao: faker.commerce.productDescription(),
		quantidade: faker.number.int({ max: 1000 })
	},
	tokenInvalido: 'TokenInvalido123',
	messagem: 'Token de acesso ausente, inválido, expirado ou usuário do token não existe mais'
}

const TC093 = {
	usuario: {
		name: faker.person.firstName(),
		email: faker.internet.email(),
		password: faker.internet.password(),
		administrador: 'true',
	},
	produto: {
		nome: `${faker.commerce.product()}${faker.number.int({ max: 1000 })}`,
		preco: faker.commerce.price({ max: 1000 }),
		descricao: faker.commerce.productDescription(),
		quantidade: faker.number.int({ max: 1000 })
	},
	tokenAusente: '',
	messagem: 'Token de acesso ausente, inválido, expirado ou usuário do token não existe mais'
}

const TC094 = {
	usuario: {
		name: faker.person.firstName(),
		email: faker.internet.email(),
		password: faker.internet.password(),
		administrador: 'false',
	},
	produto: {
		nome: `${faker.commerce.product()}${faker.number.int({ max: 1000 })}`,
		preco: faker.commerce.price({ max: 1000 }),
		descricao: faker.commerce.productDescription(),
		quantidade: faker.number.int({ max: 1000 })
	},
	messagem: 'Rota exclusiva para administradores'
}

const TC100 = {
	usuario: {
		name: faker.person.firstName(),
		email: faker.internet.email(),
		password: faker.internet.password(),
		administrador: 'true',
	},
	produto: {
		nome: `${faker.commerce.product()}${faker.number.int({ max: 1000 })}`,
		preco: faker.commerce.price({ max: 1000 }),
		descricao: faker.commerce.productDescription(),
		quantidade: faker.number.int({ max: 1000 })
	},
	editarProduto: {
		nome: `${faker.commerce.product()}${faker.number.int({ max: 1000 })}`,
		preco: faker.commerce.price({ max: 1000 }),
		descricao: faker.commerce.productDescription(),
		quantidade: faker.number.int({ max: 1000 })
	},
	messagem: 'Registro alterado com sucesso'
}

const TC101 = {
	idFake: 'AIADSLASDLK221',
	tokenInvalido: 'TokenInvalido101',
	message: 'Token de acesso ausente, inválido, expirado ou usuário do token não existe mais'
}

const TC102 = {
	usuario: {
		name: faker.person.firstName(),
		email: faker.internet.email(),
		password: faker.internet.password(),
		administrador: 'false',
	},
	editarProduto: {
		nome: `${faker.commerce.product()}${faker.number.int({ max: 1000 })}`,
		preco: faker.commerce.price({ max: 1000 }),
		descricao: faker.commerce.productDescription(),
		quantidade: faker.number.int({ max: 1000 })
	},
	idFake: 'ASD2139ASD',
	messagem: 'Rota exclusiva para administradores'
}

module.exports = {
	TC070, TC071, TC072, TC073, TC080, TC081, TC082, TC083,
	TC090, TC091, TC092, TC093, TC094, TC100, TC101, TC102 
}