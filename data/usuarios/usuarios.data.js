const { faker } = require("@faker-js/faker")

const TC01 = {
  name: faker.person.firstName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  administrador: 'true',
  message: 'Cadastro realizado com sucesso'
};

const TC02 = {
  name: faker.person.firstName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  administrador: 'true',
  message: 'Cadastro realizado com sucesso'
};

const TC03 = {
  name: faker.person.firstName(),
  newName: faker.person.firstName(),
  email: faker.internet.email(),
  newEmail: faker.internet.email(),
  password: faker.internet.password(),
  administrador: 'true',
  message: 'Este email já está sendo usado'
};

const TC04 = {
  ...TC01,
  name: '',
  email: faker.internet.email(),
  message: 'nome não pode ficar em branco'
}

const TC05 = {
  ...TC01,
  email: faker.internet.email(),
  password: '',
  message: 'password não pode ficar em branco'
}

const TC06 = {
  ...TC01,
  email: '',
  message: 'email não pode ficar em branco'
}

const TC07 = {
  ...TC01,
  email: faker.internet.email(),
  message: `administrador deve ser 'true' ou 'false'`,
  administrador: ''
}

const TC020 = {
  name: faker.person.firstName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  administrador: 'false'
}

const TC021 = {
  name: faker.person.firstName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  administrador: 'false'
}

const TC022 = {
  name: faker.person.firstName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  administrador: 'false'
}

const TC023 = {
  name: faker.person.firstName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  administrador: 'false'
}

const TC040 = {
  name: faker.person.firstName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  administrador: 'true',
  message: 'Registro excluído com sucesso'
}

const TC041 = {
  id: '3HEOjYU6FAAAAAW2i0YJ',
  message: 'Nenhum registro excluído'
};

const TC050 = {
  name: faker.person.firstName(),
  newName: faker.person.firstName(),
  email: faker.internet.email(),
  newEmail: faker.internet.email(),
  password: faker.internet.password(),
  administrador: 'false',
  message: 'Registro alterado com sucesso'
}

const TC051 = {
  name: faker.person.firstName(),
  email: faker.internet.email(),
  newEmail: faker.internet.email(),
  password: faker.internet.password(),
  administrador: 'false',
  message: 'Registro alterado com sucesso'
}

module.exports = {
  TC01, TC02, TC03, TC04, TC05, TC06, TC07, TC020, TC021, TC022, TC023, TC040, TC041, TC050, TC051
}