import Cpf from "../../src/checkout/domain/entities/Cpf"

test("should validate cpf", () => {
    const cpf = new Cpf("847.903.332-05")
    expect(cpf).toBeDefined()
})

test("should NOT validate cpf", () => {
    expect(() => new Cpf("111.111.111-11")).toThrow(new Error("Invalid cpf"))
})