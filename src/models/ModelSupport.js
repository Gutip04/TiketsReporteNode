import { DataTypes } from "sequelize";
import { conn } from "../config/database.js";

export const Support = conn.define("support", {
    id_soporte:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    comment:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: true
})