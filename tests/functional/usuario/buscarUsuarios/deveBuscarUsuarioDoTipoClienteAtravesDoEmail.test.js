const { postUsuarios } = require("../../../../core/src/service/usuarios/postUsuarios.service.js")
const { TC034 } = require("../../../../data/functional/usuarios.data.js")
const { assert, expect } = require("../../../../constants.js")
const { buscarUsuarioAtravesDoEmail } = require("../../../../core/src/service/usuarios/getAllUsuarios.service.js")

describe("Usuário - GET", () => {

  before('Deve registrar um usuário do tipo cliente', async () => {
    await postUsuarios({nome: TC034.name, email: TC034.email, password: TC034.password, administrador: TC034.administrador})
  })

  it("[TC-034] - Deve validar a busca de um usuário do tipo cliente através do Email", async () => {
    let { usuarios } = await buscarUsuarioAtravesDoEmail(TC034.email)
    assert.equal(usuarios[0].nome, TC034.name, 'O nome é diferente do esperado')
    assert.equal(usuarios[0].email, TC034.email, 'O nome é diferente do esperado')
    assert.equal(usuarios[0].password, TC034.password, 'O nome é diferente do esperado')
    assert.equal(usuarios[0].administrador, TC034.administrador, 'O nome é diferente do esperado')
    expect(usuarios[0]).to.have.property('_id')
    expect(usuarios[0]._id).to.be.a('string')
    expect(usuarios[0]._id).to.have.lengthOf.above(0)
  })
})
