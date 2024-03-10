
const { assert } = require("../../../constants")
const { postLogin } = require("../../../core/src/service/login/postLogin.service")
const { TC14 } = require("../../../data/functional/login/login.data")
const { describeName } = require("../../../data/global/describeName.data")

describe(describeName.login.functional, () => {
    it('[TC-14] - Deve realizar login com credenciais inválidas para usuário do tipo Cliente', async () => {
        let { json } = await postLogin({email: TC14.email, password: TC14.password, statusCodeResponse: 401})
        assert.equal(json.message, TC14.messageLogin, 'A mensagem é diferente do esperado')
    })
})