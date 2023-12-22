const { specPactumJs } = require("../../../../constants");

async function postUsuarios({ nome, email, password, administrador }) {
  return await specPactumJs()
    .post(`${process.env.BASE_URL}/usuarios`)
    .withBody({
      nome: nome,
      email: email,
      password: password,
      administrador: administrador,
    })
    .expectStatus(201);
}

module.exports = {
  postUsuarios
};
