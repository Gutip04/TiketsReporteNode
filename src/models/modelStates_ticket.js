import { DataTypes } from "sequelize";
import { conn } from "../config/database.js";

export const StatesTicket = conn.define("states_ticket", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

