import Coupon from "../../src/checkout/domain/entities/Coupon"
import Item from "../../src/checkout/domain/entities/Item"
import Order from "../../src/checkout/domain/entities/Order"

test("should not create order with invalid CPF", () =>{
  expect(() => new Order("111.111.111-11")).toThrow(new Error("Invalid cpf"))
})

test("should create order", () =>{
    const order = new Order("847.903.332-05")
    expect(order).toBeDefined()
  })

  test("should create order with 3 items", () =>{
    const order = new Order("847.903.332-05")
    order.addItem(new Item(1,"Instrumentos musicais", "Guitarra", 1000), 1)
    order.addItem(new Item(2,"Instrumentos musicais", "Amplificador", 5000), 1)
    order.addItem(new Item(3,"Instrumentos musicais", "Cabo", 30), 3)

    const total  = order.getTotal()
    expect(total).toBe(6090)
  })

  test("should order 3 items with discount", () =>{
    const order = new Order("847.903.332-05")
    order.addItem(new Item(1,"Instrumentos musicais", "Guitarra", 1000), 1)
    order.addItem(new Item(2,"Instrumentos musicais", "Amplificador", 5000), 1)
    order.addItem(new Item(3,"Instrumentos musicais", "Cabo", 30), 3)
    order.addCoupon(new Coupon("20",20))

    const total  = order.getTotal()
    expect(total).toBe(4872)
  })

  test("should order 3 items with coupon expired", () =>{
    const order = new Order("847.903.332-05", new Date("2021-10-10"))
    order.addItem(new Item(1,"Instrumentos musicais", "Guitarra", 1000), 1)
    order.addItem(new Item(2,"Instrumentos musicais", "Amplificador", 5000), 1)
    order.addItem(new Item(3,"Instrumentos musicais", "Cabo", 30), 3)
    order.addCoupon(new Coupon("20",20, new Date("2021-03-01")))

    const total  = order.getTotal()
    expect(total).toBe(6090)
  })

  test("should create order with order code", () =>{
    const order = new Order("847.903.332-05", new Date("2021-10-10"))
    order.addItem(new Item(1,"Instrumentos musicais", "Guitarra", 1000), 1)
    order.addItem(new Item(2,"Instrumentos musicais", "Amplificador", 5000), 1)
    order.addItem(new Item(3,"Instrumentos musicais", "Cabo", 30), 3)

    const code  = order.code
    expect(code.value).toBe('202100000001')
  })