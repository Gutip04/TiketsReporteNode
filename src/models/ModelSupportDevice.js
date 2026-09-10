import { DataTypes } from "sequelize";
import { conn } from "../config/database.js";

export const SupportDevice = conn.define("SupportDevice" , {
    id_device:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false
    },
    type:{
        type: DataTypes.STRING,
        allowNull: false
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false
    },

},{
    timestamps: true
})