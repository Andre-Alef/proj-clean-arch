import Order from "../../domain/entities/Order";
import AbstractRepositoryFactory from "../../domain/factory/AbstractRepositoryFactory";
import PlaceOrderInput from "../dto/PlaceOrderInput";
import PlaceOrderOutput from "../dto/PlaceOrderOutput";
import PlaceOrderOutputAssembler from "../dto/PlaceOrderOutputAssembler";

export default class PlaceOrder{
    itemRepository: any;
    couponRepository: any;
    orderRepository: any;
    
    constructor(abstractRepositoryFactory: AbstractRepositoryFactory){
        this.itemRepository = abstractRepositoryFactory.createItemRepository()
        this.couponRepository = abstractRepositoryFactory.createCouponRepository()
        this.orderRepository = abstractRepositoryFactory.createOrderRepository()
    }

    async execute(input: PlaceOrderInput): Promise<PlaceOrderOutput>{
        let sequence = await this.orderRepository.count()
        const order = new Order(input.cpf, input.issueDate, ++sequence)
        let freight = 0
        for(const orderItem of input.orderItems){
            const item = await this.itemRepository.findById(orderItem.idItem)
            freight += item.getFreight() * orderItem.quantity
            order.addItem(item, orderItem.quantity)
        }
        order.setFreight(freight)
        if(input.coupon){
            const coupon = await this.couponRepository.findByCode(input.coupon)
            order.addCoupon(coupon)
        }
        this.orderRepository.save(order)
        return PlaceOrderOutputAssembler.assembly(order)
        
    }
}