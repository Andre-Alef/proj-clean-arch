import Coupon from "../../../domain/entities/Coupon";
import CouponRepository from "../../../domain/repository/CouponRepository";


export default class CouponRepositoryMemory implements CouponRepository {
    coupons: Coupon[]
    
    constructor(){
    this.coupons = [
            new Coupon('Vale10',10,new Date()),
            new Coupon('Vale20',20,new Date()),
            
        ]}
    async findByCode(code: string): Promise<Coupon> {
        const coupon = await this.coupons.find(coupon => coupon.code === code)
        if(!coupon) throw new Error("coupon not found")
        return coupon
    }
}