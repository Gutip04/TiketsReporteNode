
import { Department } from "./ModelDepartment.js";
import { User } from "./ModelUser.js";
import { Rol } from "./ModelRol.js";
import { Specialization } from "./ModelSpecialization.js";
import { StatesTicket } from "./modelstates_Ticket.js";
import { WorkTeam } from "./ModelWorkTeam.js";
import { SupportDevice } from "./ModelSupportDevice.js";
import { Support } from "./ModelSupport.js";
import { Ticket } from "./ModelTicket.js";
import { priority } from "./ModelPriority.js";
import { TeamUser } from "./ModelTeamUser.js";

// Relación Rol - User
Rol.hasMany(User, { foreignKey: "id_rol" });
User.belongsTo(Rol, { foreignKey: "id_rol" });

// Relación Department - User
Department.hasMany(User, { foreignKey: "id_department" });
User.belongsTo(Department, { foreignKey: "id_department" });


// Relación Specialization - User
Specialization.hasMany(User, { foreignKey: "id_specialization" });
User.belongsTo(Specialization, { foreignKey: "id_specialization" });


// Correct TeamUser relationship
WorkTeam.belongsToMany(User, {
    through: TeamUser,
    foreignKey: "id_WorkTeam",
    otherKey: "id_user"
});



User.belongsToMany(WorkTeam, {
    through: TeamUser,
    foreignKey: "id_user",
    otherKey: "id_WorkTeam"
});


// Relación Department - SupportDevice
Department.hasMany(SupportDevice, {
        foreignKey: "id_department"
});
SupportDevice.belongsTo(Department, {
    foreignKey: "id_department"
});

// Relación User - Support
User.hasMany(Support, {
    foreignKey: "id_user"
});
Support.belongsTo(User, {
    foreignKey: "id_user"
});

// Relación Ticket - Support
Ticket.hasMany(Support, {
    foreignKey: "id_ticket"
});
Support.belongsTo(Ticket, {
    foreignKey: "id_ticket"
});

// Relaciones Ticket
User.hasMany(Ticket, {
    foreignKey: "id_creator_user",
    as: "TicketCreated"
});
Ticket.belongsTo(User, {
    foreignKey: "id_creator_user",
    as: "CreatorUser"
});



User.hasMany(Ticket, {
    foreignKey: "id_assigned_user",
    as: "TicketAssigned"
});
Ticket.belongsTo(User, {
    foreignKey: "id_assigned_user",
    as: "AssignedUser"
});



Department.hasMany(Ticket, {
    foreignKey: "id_department"
});
Ticket.belongsTo(Department, {
    foreignKey: "id_department"
});




WorkTeam.hasMany(Ticket, {
    foreignKey: "id_WorkTeam"
});
Ticket.belongsTo(WorkTeam, {
    foreignKey: "id_WorkTeam"
});



SupportDevice.hasMany(Ticket, {
    foreignKey: "id_device"
});
Ticket.belongsTo(SupportDevice, {
    foreignKey: "id_device"
});





StatesTicket.hasMany(Ticket, {
    foreignKey: "id_statusTicket"
});
Ticket.belongsTo(StatesTicket, {
    foreignKey: "id_statusTicket"
});




priority.hasMany(Ticket, {
    foreignKey: "id_priority"
});
Ticket.belongsTo(priority, {
    foreignKey: "id_priority"
});

TeamUser.belongsTo(WorkTeam, {
    foreignKey: "id_WorkTeam"
});

TeamUser.belongsTo(User, {
    foreignKey: "id_user"
});

export {
    Rol,Department,User,Specialization,StatesTicket,TeamUser,WorkTeam,SupportDevice,Support,Ticket
    };