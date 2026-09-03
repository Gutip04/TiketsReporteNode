import { DataTypes } from "sequelize";
import { conn } from "../config/database.js";

export const Rol = conn.define("Rol", {
    id_rol: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    timestamps: true
})