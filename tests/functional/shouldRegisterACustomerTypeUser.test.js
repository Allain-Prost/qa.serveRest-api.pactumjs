const { assert, expect } = require("chai")
const { postUsuarios } = require("../../core/src/service/usuarios/postUsuarios.service.js")
const { TC01 } = require("../../data/functional/usuarios.data.js")

describe("Usuário - POST", () => {

  it("[TC-01] - Should register a customer type user", async () => {
    let { json } = await postUsuarios({nome: TC01.name, email: TC01.email, password: TC01.password, administrador: TC01.administrador})
    assert.equal(json.message, TC01.message, 'A mensagem é diferente do esperado')
    expect(json).to.have.property('_id')
    expect(json._id).to.be.a('string')
    expect(json._id).to.have.lengthOf.above(0)
  })
})
