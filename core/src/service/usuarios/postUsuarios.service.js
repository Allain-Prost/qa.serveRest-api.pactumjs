const { specPactumJs } = require("../../../../constants");

async function postUsuarios({ nome, email, password, administrador, statusCodeResponse = 201 }) {
  return await specPactumJs()
    .post(`${process.env.BASE_URL}/usuarios`)
    .withBody({
      nome: nome,
      email: email,
      password: password,
      administrador: administrador,
    })
    .expectStatus(statusCodeResponse);
}

module.exports = {
  postUsuarios
};
