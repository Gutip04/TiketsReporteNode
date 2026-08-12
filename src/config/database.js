import { DB_NAME, DB_USER, DB_PASS, OBJ_CONN, } from "./credentials.js"
import { Sequelize } from "sequelize"

export const conn = new Sequelize(DB_NAME, DB_USER, DB_PASS, OBJ_CONN)


