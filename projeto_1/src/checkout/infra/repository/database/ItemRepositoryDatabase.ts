import DatabaseConnection from '../../database/DatabaseConnection';
import Item from '../../../domain/entities/Item'
import ItemRepository from '../../../domain/repository/ItemRepository';

export default class ItemRepositoryDatabase implements ItemRepository {

    constructor(readonly databaseConnection: DatabaseConnection){}

    async findById(idItem: number): Promise<Item> {
        const [item] = await this.databaseConnection.query("select * from ccca.item where id = $1", [idItem])
        return new Item(
            item.id_item,
            item.category,
            item.description,
            item.price,
            item.width,
            item.height,
            item.lenght,
            item.weight
            )
    }
}
