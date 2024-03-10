const { postUsuarios } = require("../../../../core/src/service/usuarios/postUsuarios.service.js")
const { TC07 } = require("../../../../data/functional/usuarios.data.js")
const { assert } = require("../../../../constants.js")

describe("Usuário - POST", () => {

  it("[TC-07] - Deve validar o registro de um usuário sem senha", async () => {
    let { json } = await postUsuarios({nome: TC07.name, email: TC07.email, password: TC07.password, administrador: TC07.administrador, statusCodeResponse: 400})
    assert.equal(json.password, TC07.message, 'A mensagem é diferente do esperado')
  })
})
