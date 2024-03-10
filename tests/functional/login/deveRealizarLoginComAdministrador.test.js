const { assert, expect } = require("../../../constants")
const { postLogin } = require("../../../core/src/service/login/postLogin.service")
const { getUsuarioById } = require("../../../core/src/service/usuarios/getUsuarioById.service")
const { postUsuarios } = require("../../../core/src/service/usuarios/postUsuarios.service")
const { TC11 } = require("../../../data/functional/login/login.data")
const { describeName } = require("../../../data/global/describeName.data")

describe(describeName.login.functional, () => {

    let postUserAdm, userAdm 
    before('Deve cadastrar um usuário do tipo Adm e buscar os dados desse usuário', async () => {
        postUserAdm = await postUsuarios({nome: TC11.name, email: TC11.email, password: TC11.password, administrador: TC11.administrador })
        userAdm = await getUsuarioById(postUserAdm.json._id)
    })

    it('[TC-11] - Deve realizar login com usuário do tipo Adm', async () => {
        let { json } = await postLogin({email: userAdm.json.email, password: userAdm.json.password})
        assert.equal(json.message, TC11.messageLogin, 'A mensagem é diferente do esperado')
        expect(json).to.have.property('authorization')
        expect(json.authorization).to.be.a('string')
        expect(json.authorization).to.have.lengthOf.above(0)
    })
})