import { DataTypes, } from "sequelize";
import { conn } from "../config/database.js";

export const Specialization = conn.define("Specialization", {
    id_specialization: {
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