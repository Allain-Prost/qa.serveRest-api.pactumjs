const { faker } = require("@faker-js/faker")

const TC01 = {
  name: faker.person.firstName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  administrador: 'true'
};

module.exports = {
  TC01
}