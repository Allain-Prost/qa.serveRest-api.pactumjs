const { faker } = require("@faker-js/faker")

const TC01 = {
  name: faker.person.firstName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  administrador: 'true',
  message: 'Cadastro realizado com sucesso'
};

const TC02 = {
  ...TC01,
  email: faker.internet.email(),
  message: 'Registro excluído com sucesso'
};

const TC03 = {
  ...TC01,
  email: faker.internet.email()
};

const TC04 = {
  name: faker.person.firstName(),
  newName: faker.person.firstName(),
  email: faker.internet.email(),
  newEmail: faker.internet.email(),
  password: faker.internet.password(),
  administrador: 'true',
  message: 'Registro alterado com sucesso'
};

const TC06 = {
  name: faker.person.firstName(),
  newName: faker.person.firstName(),
  email: faker.internet.email(),
  newEmail: faker.internet.email(),
  password: faker.internet.password(),
  administrador: 'true',
  message: 'Este email já está sendo usado'
};

const TC07 = {
  ...TC01,
  email: faker.internet.email(),
  password: '',
  message: 'password não pode ficar em branco'
};

const TC08 = {
  ...TC01,
  name: '',
  email: faker.internet.email(),
  message: 'nome não pode ficar em branco'
}

const TC09 = {
  ...TC01,
  email: '',
  message: 'email não pode ficar em branco'
}

const TC10 = {
  ...TC01,
  email: faker.internet.email(),
  message: `administrador deve ser 'true' ou 'false'`,
  administrador: ''
}

module.exports = {
  TC01,
  TC02,
  TC03,
  TC04,
  TC06, TC07, TC08, TC09, TC10
}