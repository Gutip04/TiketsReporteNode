import { Department } from "./ModelDepartment.js";
import { User } from "./ModelUser.js";
import { Rol } from "./ModelRol.js";
import { SupportDevice } from "./ModelSupportDevice.js";
import { Specialization } from "./ModelSpecialization.js";

// guti
Rol.hasMany(User, {foreignKey: "id_rol"})
User.belongsTo(Rol,{foreignKey: "id_rol"})

Department.hasMany(User, {foreignKey: "id_department"})
User.belongsTo(Department, {foreignKey: "id_department"})

Specialization.hasMany(User, {foreignKey: "id_specialization"})
User.belongsTo(Specialization, {foreignKey: "id_specialization"})

//DevePelaez: Relation ModelSupportDevice 
Department.hasMany(SupportDevice, {foreignKey: "id_department"});
SupportDevice.belongsTo(Department, {foreignKey: "id_department"});


export  {
    Rol, Department, User
}