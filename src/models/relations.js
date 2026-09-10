import { Department } from "./ModelDepartment.js";
import { User } from "./modelUser.js";
import { Rol } from "./ModelRol.js";
import { Specialization } from "./ModelSpecialization.js";
import { StatesTicket } from "./modelStates_ticket.js";
import { TeamUser } from "./ModelTeam_user.js";
import { WorkTeam } from "./ModelWorkTeam.js";
import { SupportDevice } from "./ModelSupportDevice.js";
import { Support } from "./ModelSupport.js";

Rol.hasMany(User, { foreignKey: "id_rol" });
User.belongsTo(Rol, { foreignKey: "id_rol" });

Department.hasMany(User, { foreignKey: "id_department" });
User.belongsTo(Department, { foreignKey: "id_department" });

Specialization.hasMany(User, { foreignKey: "id_specialization" });
User.belongsTo(Specialization, { foreignKey: "id_specialization" });

User.belongsToMany(WorkTeam, {
    through: TeamUser,
    foreignKey: "id_user"
});

WorkTeam.belongsToMany(User, {
    through: TeamUser,
    foreignKey: "id_team"
});

//Relation DevePelaez SupportDevice
Department.hasMany(SupportDevice, {
    foreignKey: "id_departamento"
});
SupportDevice.belongsTo(Department, {
    foreignKey: "id_departamento"
});


//Relation DevePelaez Support
//User - Support 
User.hasMany(Support, {
    foreignKey: "id_user"
});
Support.belongsTo(User, {
    foreignKey: "id_user"
});

//Ticket - Support

export {
    Rol,
    Department,
    User,
    Specialization,
    StatesTicket,
    TeamUser,
    WorkTeam,
};
