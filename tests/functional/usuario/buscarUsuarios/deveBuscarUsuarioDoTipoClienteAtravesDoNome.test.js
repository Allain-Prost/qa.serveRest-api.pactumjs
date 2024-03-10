const { postUsuarios } = require("../../../../core/src/service/usuarios/postUsuarios.service.js")
const { TC033 } = require("../../../../data/functional/usuarios.data.js")
const { assert, expect } = require("../../../../constants.js")
const { getUsuarioById } = require("../../../../core/src/service/usuarios/getUsuarioById.service.js")
const { getAllUsers, buscarUsuarioAtravesDoNome } = require("../../../../core/src/service/usuarios/getAllUsuarios.service.js")

describe("Usuário - GET", () => {

  before('Deve registrar um usuário do tipo cliente', async () => {
    await postUsuarios({nome: TC033.name, email: TC033.email, password: TC033.password, administrador: TC033.administrador})
  })

  it("[TC-033] - Deve validar a busca de um usuário do tipo cliente através do Nome", async () => {
    let { usuarios } = await buscarUsuarioAtravesDoNome(TC033.name)
    assert.equal(usuarios[0].nome, TC033.name, 'O nome é diferente do esperado')
    assert.equal(usuarios[0].email, TC033.email, 'O nome é diferente do esperado')
    assert.equal(usuarios[0].password, TC033.password, 'O nome é diferente do esperado')
    assert.equal(usuarios[0].administrador, TC033.administrador, 'O nome é diferente do esperado')
    expect(usuarios[0]).to.have.property('_id')
    expect(usuarios[0]._id).to.be.a('string')
    expect(usuarios[0]._id).to.have.lengthOf.above(0)
  })
})
