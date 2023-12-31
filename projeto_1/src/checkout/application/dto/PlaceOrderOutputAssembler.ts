import Order from "../../domain/entities/Order";
import PlaceOrderOutput from "./PlaceOrderOutput";

export default class PlaceOrderOutputAssembler{
    static assembly(order: Order){
        const total = order.getTotal()
        return new PlaceOrderOutput(order.code.value, total)
    }
}