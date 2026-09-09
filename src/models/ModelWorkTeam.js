import {DataTypes} from "sequelize"
import {conn} from "../config/database.js"

export const WorkTeam = conn.define("WorkTeam",{
    id_WorkTeam:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },

    name:{
        type: DataTypes.STRING,
        allowNull: false
    }
}
)