const { postUsuarios } = require("../../../../core/src/service/usuarios/postUsuarios.service.js")
const { assert, expect } = require("../../../../constants.js")
const { buscarUsuarioAtravesDoNome } = require("../../../../core/src/service/usuarios/getAllUsuarios.service.js")
const { TC021 } = require("../../../../data/usuarios/usuarios.data.js")

describe("Usuário - GET", () => {

  before('Deve registrar um usuário do tipo cliente', async () => {
    await postUsuarios({nome: TC021.name, email: TC021.email, password: TC021.password, administrador: TC021.administrador})
  })

  it("[TC-021] - Deve validar a busca de um usuário do tipo cliente através do Nome", async () => {
    let { usuarios } = await buscarUsuarioAtravesDoNome(TC021.name)
    assert.equal(usuarios[0].nome, TC021.name, 'O nome é diferente do esperado')
    assert.equal(usuarios[0].email, TC021.email, 'O nome é diferente do esperado')
    assert.equal(usuarios[0].password, TC021.password, 'O nome é diferente do esperado')
    assert.equal(usuarios[0].administrador, TC021.administrador, 'O nome é diferente do esperado')
    expect(usuarios[0]).to.have.property('_id')
    expect(usuarios[0]._id).to.be.a('string')
    expect(usuarios[0]._id).to.have.lengthOf.above(0)
  })
})
