const { postUsuarios } = require("../../core/src/service/usuarios/postUsuarios.service.js")
const { TC03 } = require("../../data/functional/usuarios.data.js")
const { assert, expect } = require("../../constants.js")
const { getUsuarioById } = require("../../core/src/service/usuarios/getUsuarioById.service.js")

describe("Usuário - POST", () => {

  let userId
  before('Should register a customer type user', async () => {
    userId = await postUsuarios({nome: TC03.name, email: TC03.email, password: TC03.password, administrador: TC03.administrador})
  })

  it("[TC-03] - Should search a customer type user", async () => {
    let { json } = await getUsuarioById(userId.json._id)
    assert.equal(json.nome, TC03.name, 'O nome é diferente do esperado')
    assert.equal(json.email, TC03.email, 'O nome é diferente do esperado')
    assert.equal(json.password, TC03.password, 'O nome é diferente do esperado')
    assert.equal(json.administrador, TC03.administrador, 'O nome é diferente do esperado')
    expect(json).to.have.property('_id')
    expect(json._id).to.be.a('string')
    expect(json._id).to.have.lengthOf.above(0)
  })
})
