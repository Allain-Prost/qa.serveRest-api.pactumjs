const { spec } = require("pactum");

describe("User", () => {
  it("[TC-01] - Should register a customer type user", async () => {
    await spec()
      .post("https://serverest.dev/usuarios")
      .withBody({
        nome: "Allain Pactum",
        email: "Allain11@qa.com.br",
        password: "AllainPactum",
        administrador: "true",
      })
      .expectStatus(201)
  })
})
