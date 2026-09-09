import {DataTypes} from "sequelize"
import {conn} from "../config/database.js"

export const priority = conn.define("priority",{
    id_priority:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },

    name:{
        type: DataTypes.STRING,
        allowNull: false
    }
},  {
    timestamps: true
}
)