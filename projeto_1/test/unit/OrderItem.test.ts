import OrderItem from "../../src/checkout/domain/entities/OrderItem"


test("should create order item", () => {
    const orderItem = new OrderItem(1,1000,2)
    const total = orderItem.getTotal()
    expect(total).toBe(2000)
})