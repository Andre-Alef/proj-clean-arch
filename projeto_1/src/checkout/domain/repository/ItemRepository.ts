import Item from "../entities/Item";


export default interface ItemRepository {
    findById(idItem:number): Promise<Item>
}