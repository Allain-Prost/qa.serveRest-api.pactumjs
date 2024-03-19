
const { assert } = require("../../../constants")
const { postLogin } = require("../../../core/src/service/login/postLogin.service")
const { TC063 } = require("../../../data/login/login.data")
const { describeName } = require("../../../data/global/describeName.data")

describe(describeName.login.functional, () => {
    it('[TC-14] - Deve realizar login com credenciais inválidas para usuário do tipo Cliente', async () => {
        let { json } = await postLogin({email: TC063.email, password: TC063.password, statusCodeResponse: 401})
        assert.equal(json.message, TC063.messageLogin, 'A mensagem é diferente do esperado')
    })
})