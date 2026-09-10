import { DataTypes } from "sequelize";
import { conn } from "../config/database.js";

export const TeamUser = conn.define("TeamUser",{
id_team: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
},

id_user: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
},
},
{
    timestamps: false,
}
);
