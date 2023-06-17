import SimulateFreightInput from "../../src/checkout/application/dto/SimulateFreightInput"
import SimulateFreight from "../../src/checkout/application/usecase/SimulateFreight"
import MemoryRepositoryFactory from "../../src/checkout/infra/factory/MemoryRepositoryFactory"

test('should simulate freigh of items',async () => {
    const simulateFreight = new SimulateFreight(new MemoryRepositoryFactory())
    const input = new SimulateFreightInput([
        {
            idItem: 1,
            quantity: 1
        },
        {
            idItem: 2,
            quantity: 1
        },
        {
            idItem: 3,
            quantity: 3
        }
    ])
    const freight =await simulateFreight.execute(input)
    expect(freight).toBe(260)
})