export default class PlaceOrderInput {
    constructor(readonly cpf: string,readonly issueDate: Date = new Date() ,readonly orderItems: any[], readonly coupon?: string){}
}