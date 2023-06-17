import ValidateCoupon from "../../src/checkout/application/usecase/validateCoupon"
import CouponRepositoryMemory from "../../src/checkout/infra/repository/memory/CouponRepositoryMemory"

test("Should validate coupon",async () => {
    const couponRepository = new CouponRepositoryMemory()
    const validateCoupon = new ValidateCoupon(couponRepository)
    const isValid = await validateCoupon.execute("Vale20", new Date("2021-10-01"))
    expect(isValid).toBeTruthy()
})