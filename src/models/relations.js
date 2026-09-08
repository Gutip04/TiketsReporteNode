import { Department } from "./ModelDepartment.js";
import { User } from "./ModelUser.js";
import { Rol } from "./ModelRol.js";
import { Specialization } from "./ModelSpecialization.js";
import { SupportDevice } from "./ModelSupportDevice.js";


Rol.hasMany(User, {foreignKey: "id_rol"})
User.belongsTo(Rol,{foreignKey: "id_rol"})

Department.hasMany(User, {foreignKey: "id_departament"})
User.belongsTo(Department, {foreignKey: "id_departament"})

Specialization.hasMany(User, {foreignKey: "id_specialization"})
User.belongsTo(Specialization, {foreignKey: "id_specialization"})


//Support Device devePelaez
Department.hasMany(SupportDevice, {foreignKey: "id_department"});
SupportDevice.belongsTo(Department, {foreignKey: "id_department"});

export  {
    Rol, Department, User
}