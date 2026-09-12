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

    id_creator_user: {
        type: DataTypes.INTEGER,
        references: {
            model: "Users",
            key: "id_user"
        }
    },

    id_assigned_user: {
        type: DataTypes.INTEGER,
        references: {
            model: "Users",
            key: "id_user"
        }
    },

    id_department: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Departments",
            key: "id_department"
        }
    },

    id_WorkTeam:{
        type: DataTypes.INTEGER,
        allowNull:false,
        references: {
            model: "WorkTeams",
            key: "id_WorkTeam"
        }
    },

    id_device: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "SupportDevices",
            key: "id_device"
        }
    },

    id_statusTicket: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "states_tickets",
            key: "id"
        }
    }, 

    id_priority: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "priorities",
            key: "id_priority"
        }
    },

    closedAt: {
        type: DataTypes.DATE,
        allowNull: true
    },
},{
    timestamps: true
})