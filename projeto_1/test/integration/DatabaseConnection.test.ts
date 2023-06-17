import DatabaseConnectionAdapter from "../../src/checkout/infra/database/DatabaseConnectionAdapter"

test.skip("should create database connection", async () => {
    const databaseConnection = new DatabaseConnectionAdapter()
    const items = await databaseConnection.query("select * from ccca.item",[])
    expect(items).toHaveLength(3)
})