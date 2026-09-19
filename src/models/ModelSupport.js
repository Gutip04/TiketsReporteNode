import { DataTypes } from "sequelize";
import { conn } from "../config/database.js";

export const Support = conn.define("support", {
    id_support: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_ticket: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: true
});