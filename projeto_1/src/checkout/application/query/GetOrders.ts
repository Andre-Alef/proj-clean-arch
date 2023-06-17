import DatabaseConnection from "../../infra/database/DatabaseConnection";
import GetOrderOutput from "../dto/GetOrderOutput";

export default class GetOrders {
    constructor(readonly databaseConnection: DatabaseConnection){

    }

   async execute(): Promise<GetOrderOutput[]>{
       const getOrdersOutput: GetOrderOutput[] = []
        const ordersData = await this.databaseConnection.query("select id, code, cpf, freight total from ccca.order", [])
        for(const orderData of ordersData){
        const orderItemsData = await this.databaseConnection.query("select i.description, oi.quantity, oi.price::float from ccca.order_item oi join ccca.item i on (oi.id_item = i.id) where id_order = $1", [orderData.id])
        const getOrderOutput = new GetOrderOutput(orderData.code, orderData.cpf, orderItemsData, parseFloat(orderData.freight), parseFloat(orderData.total))
        getOrdersOutput.push(getOrderOutput)
        }
        return getOrdersOutput
    }
}