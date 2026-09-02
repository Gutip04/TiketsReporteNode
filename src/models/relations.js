import { Department } from "./modelDepartments";
import { User } from "./modelUser";
import { Rol } from "./modelRols";
import { Specialization } from "./modelspecializations";

Rol.hasMany(User, {foreignKey: "id_rol"})
User.belongsTo(Rol,{foreignKey: "id_rol"})

Department.hasMany(User, {foreignKey: "id_departament"})
User.belongsTo(Department, {foreignKey: "id_departament"})

Specialization.hasMany(User, {foreignKey: "id_specialization"})
User.belongsTo(Specialization, {foreignKey: "id_specialization"})

export  {
    Rol, Department, User
}