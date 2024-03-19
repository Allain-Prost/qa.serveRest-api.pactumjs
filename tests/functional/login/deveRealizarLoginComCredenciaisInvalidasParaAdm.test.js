const { assert } = require("../../../constants")
const { postLogin } = require("../../../core/src/service/login/postLogin.service")
const { TC061 } = require("../../../data/login/login.data")
const { describeName } = require("../../../data/global/describeName.data")

describe(describeName.login.functional, () => {
    it('[TC-061] - Deve realizar login com credenciais inválidas para usuário do tipo Adm', async () => {
        let { json } = await postLogin({email: TC061.email, password: TC061.password, statusCodeResponse: 401})
        assert.equal(json.message, TC061.messageLogin, 'A mensagem é diferente do esperado')
    })
})