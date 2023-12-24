const { faker } = require("@faker-js/faker");

const TC11 = {
    name: faker.person.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    administrador: 'true',
    message: 'Cadastro realizado com sucesso',
    messageLogin: 'Login realizado com sucesso'
}

const TC12 ={
    ...TC11,
    email: faker.internet.email(),
    password: 'invalido',
    messageLogin: 'Email e/ou senha inválidos'
}

module.exports = {
    TC11, TC12
}