import Order from "../../../domain/entities/Order";
import OrderRepository from "../../../domain/repository/OrderRepository";

export default class OrderRepositoryMemory implements OrderRepository{
    orders: Order[]
    
    constructor (){
        this.orders = []
    }
    
    async save(order:Order): Promise<void> {
        this.orders.push(order)
    }

    async count(): Promise<number>{
        return this.orders.length
    }
}