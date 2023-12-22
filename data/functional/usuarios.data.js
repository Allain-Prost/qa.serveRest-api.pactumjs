import { faker } from "@faker-js/faker"

const TC01 = {
  name: faker.person.firstName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  administrador: 'true' 
}

export default TC01;