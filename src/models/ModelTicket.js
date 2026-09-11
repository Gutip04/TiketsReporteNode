import { DataTypes } from "sequelize";
import { conn } from "../config/database.js";

export const Ticket = conn.define("tickets", {
    id_ticket: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },

    status:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Pendiente"
    },

    id_creator_user: {
        type: DataTypes.INTEGER,
        references: {
            model: "User",
            key: "id_user"
        }
    },

    id_assigned_user: {
        type: DataTypes.INTEGER,
        references: {
            model: "User",
            key: "id_user"
        }
    },

    id_department: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "department",
            key: "id_department"
        }
    },

    id_WorkTeam:{
        type: DataTypes.INTEGER,
        allowNull:false,
        references: {
            model: "WorkTeam",
            key: "id_WorkTeam"
        }
    },

    id_device: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "SupportDevice",
            key: "id_device"
        }
    },

    id_statusTicket: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "states_ticket",
            key: "id"
        }
    }, 

    id_priority: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "priority",
            key: "id_priority"
        }
    },

    closedAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
},{
    timestamps: true
})