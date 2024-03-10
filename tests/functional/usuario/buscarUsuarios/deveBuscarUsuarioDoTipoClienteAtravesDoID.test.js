const { postUsuarios } = require("../../../../core/src/service/usuarios/postUsuarios.service.js")
const { TC032 } = require("../../../../data/functional/usuarios.data.js")
const { assert, expect } = require("../../../../constants.js")
const { getUsuarioById } = require("../../../../core/src/service/usuarios/getUsuarioById.service.js")

describe("Usuário - GET", () => {

  let userId
  before('Deve registrar um usuário do tipo cliente', async () => {
    userId = await postUsuarios({nome: TC032.name, email: TC032.email, password: TC032.password, administrador: TC032.administrador})
  })

  it("[TC-032] - Deve validar a busca de um usuário do tipo cliente através do ID", async () => {
    let { json } = await getUsuarioById(userId.json._id)
    assert.equal(json.nome, TC032.name, 'O nome é diferente do esperado')
    assert.equal(json.email, TC032.email, 'O nome é diferente do esperado')
    assert.equal(json.password, TC032.password, 'O nome é diferente do esperado')
    assert.equal(json.administrador, TC032.administrador, 'O nome é diferente do esperado')
    expect(json).to.have.property('_id')
    expect(json._id).to.be.a('string')
    expect(json._id).to.have.lengthOf.above(0)
  })
})
