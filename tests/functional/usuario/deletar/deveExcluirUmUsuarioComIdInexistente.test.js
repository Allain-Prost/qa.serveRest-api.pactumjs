const { postUsuarios } = require("../../../../core/src/service/usuarios/postUsuarios.service.js")
const { deleteUsuario } = require("../../../../core/src/service/usuarios/deleteUsuarios.service.js")
const { assert } = require("../../../../constants.js")
const { TC041 } = require("../../../../data/usuarios/usuarios.data.js")

describe("Usuário - DELETE", () => {

  it("[TC-041] - Deve validar a exclusão de usuário com Id inexistente", async () => {
    let { json } = await deleteUsuario(TC041.id)
    assert.equal(json.message, TC041.message, 'A mensagem é diferente do esperado')
  })
})
