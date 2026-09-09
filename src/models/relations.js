import { Department } from "./ModelDepartment.js";
import { User } from "./modelUser.js";
import { Rol } from "./ModelRol.js";
import { Specialization } from "./ModelSpecialization.js";
import { StatesTicket } from "./modelStates_ticket.js";
import {TeamUser } from "./ModelTeam_user.js";

Rol.hasMany(User, {foreignKey: "id_rol"})
User.belongsTo(Rol,{foreignKey: "id_rol"})

Department.hasMany(User, {foreignKey: "id_departament"})
User.belongsTo(Department, {foreignKey: "id_departament"})

Specialization.hasMany(User, {foreignKey: "id_specialization"})
User.belongsTo(Specialization, {foreignKey: "id_specialization"})


User.belongsToMany(Equipo, { through: TeamUser, foreignKey: "id_user" })
Equipo.belongsToMany(User, { through: TeamUser, foreignKey: "id_Team" }) 

export  {
    Rol, Department, User, Specialization, StatesTicket,TeamUser
}