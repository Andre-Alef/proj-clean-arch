import DatabaseConnection from '../../database/DatabaseConnection';
import CouponRepository from '../../../domain/repository/CouponRepository';
import Coupon from '../../../domain/entities/Coupon';

export default class CouponRepositoryDatabase implements CouponRepository {

    constructor(readonly databaseConnection: DatabaseConnection){}

    async findByCode(code: string): Promise<Coupon> {
        const [couponData] = await this.databaseConnection.query("select * from ccca.coupon where code = $1", [code])
        if(!couponData) throw new Error('Coupon not found')
        return new Coupon(
            couponData.code,
            couponData.percentage,
            couponData.expere_date,            
            )
    }
}
