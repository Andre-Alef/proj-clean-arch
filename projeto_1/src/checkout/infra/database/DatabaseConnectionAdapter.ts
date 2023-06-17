import DatabaseConnection from "./DatabaseConnection";
import pgp from 'pg-promise'
export default class DatabaseConnectionAdapter implements DatabaseConnection{
    pgp: any
    constructor () {
        this.pgp = pgp()("")
    }
    query(statement: string, params: any){
        
    }
}