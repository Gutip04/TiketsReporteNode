import { DataTypes } from "sequelize";
import { conn } from "../config/database";

export const support = conn.define("Support", {
    id_support:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    Despription:{
        type: DataTypes.STRING,
        allowNull: false
    }
    
},{
    timestamps: true
})