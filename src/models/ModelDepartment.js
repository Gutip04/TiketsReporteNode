import { DataTypes } from "sequelize";
import { conn } from "../config/database.js";

export const Department = conn.define("Department", {
    id_department: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    timestamps: true
})