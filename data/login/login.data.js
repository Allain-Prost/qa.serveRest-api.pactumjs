const { faker } = require("@faker-js/faker");

const TC060 = {
    name: faker.person.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    administrador: 'true',
    message: 'Cadastro realizado com sucesso',
    messageLogin: 'Login realizado com sucesso'
}

const TC061 ={
    ...TC060,
    email: faker.internet.email(),
    password: 'invalido',
    messageLogin: 'Email e/ou senha inválidos'
}

const TC062 = {
    ...TC060,
    name: faker.person.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    administrador: 'false'
}

const TC063 = {
    ...TC062,
    email: faker.internet.email(),
    password: 'invalido',
    messageLogin: 'Email e/ou senha inválidos'
}

module.exports = {
    TC060, TC061, TC062, TC063
}