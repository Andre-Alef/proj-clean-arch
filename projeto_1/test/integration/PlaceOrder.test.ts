import ItemRepositoryMemory from "../../src/checkout/infra/repository/memory/ItemRepositoryMemory"
import OrderRepositoryMemory from "../../src/checkout/infra/repository/memory/OrderRepositoryMemory"
import PlaceOrder from "../../src/checkout/application/usecase/PlaceOrder"
import PlaceOrderInput from "../../src/checkout/application/dto/PlaceOrderInput"
import CouponRepositoryMemory from "../../src/checkout/infra/repository/memory/CouponRepositoryMemory"
import MemoryRepositoryFactory from "../../src/checkout/infra/factory/MemoryRepositoryFactory"

let placeOrder:PlaceOrder

beforeEach(() => {
    placeOrder = new PlaceOrder(new MemoryRepositoryFactory())
})
test("Should order",async  () => {
    const input:PlaceOrderInput = {
        cpf: "847.903.332-05",
        issueDate: new Date('2021-03-01'),
        orderItems: [
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

        ],
        coupon: 'Vale20'
    }
    
    const output = await placeOrder.execute(input)
    expect(output.total).toBe(4872)
    expect(output.code).toBe('202100000001')
})