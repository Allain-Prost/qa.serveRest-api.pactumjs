const { specPactumJs } = require("../../../../constants");

async function putUsuarioById({id, nome, email, password, administrador, statusCodeResponse = 200}) {
  return await specPactumJs()
    .put(`${process.env.BASE_URL}/usuarios/{_id}`)
    .withPathParams({
      _id: id 
    })
    .withBody({
      nome: nome,
      email: email,
      password: password,
      administrador: administrador
    })
    .expectStatus(statusCodeResponse)
}

module.exports = {
  putUsuarioById
}