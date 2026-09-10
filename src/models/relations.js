import { Department } from "./ModelDepartment.js";
import { User } from "./modelUser.js";
import { Rol } from "./ModelRol.js";
import { Specialization } from "./ModelSpecialization.js";
import { StatesTicket } from "./modelStates_ticket.js";
import { TeamUser } from "./ModelTeam_user.js";
import { WorkTeam } from "./ModelWorkTeam.js";

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

export {
    Rol,
    Department,
    User,
    Specialization,
    StatesTicket,
    TeamUser,
    WorkTeam
};
