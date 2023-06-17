import Coupon from "../../src/checkout/domain/entities/Coupon"

test('Should create valid coupon', () => {
    const coupon = new Coupon("20",20, new Date("2021-10-10"))
    const isExpired = coupon.isExpired(new Date("2021-09-10"))
    expect(isExpired).toBeFalsy()
})


test('Should not create invalid coupon', () => {
    const coupon = new Coupon("20",20, new Date("2021-09-10"))
    const isExpired = coupon.isExpired(new Date("2021-10-10"))
    expect(isExpired).toBeTruthy()
})

test('Should create coupon that never expires', () => {
    const coupon = new Coupon("20",20)
    const isExpired = coupon.isExpired(new Date("2021-10-10"))
    expect(isExpired).toBeFalsy()
})