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

module.exports = {
  TC01,
  TC02,
  TC03
}