const { postUsuarios } = require("../../../../core/src/service/usuarios/postUsuarios.service.js")
const { TC04 } = require("../../../../data/usuarios/usuarios.data.js")
const { assert } = require("../../../../constants.js")

describe("Usuário - POST", () => {

  it("[TC-04] - Deve validar o registro de um usuário do tipo ADM sem nome", async () => {
    let { json } = await postUsuarios({nome: TC04.name, email: TC04.email, password: TC04.password, administrador: TC04.administrador, statusCodeResponse: 400})
    assert.equal(json.nome, TC04.message, 'A mensagem é diferente do esperado')
  })
})
