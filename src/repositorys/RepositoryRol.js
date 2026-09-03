import { Rol } from "../models/ModelRol.js";

// Create Rol
export function createRol(data) {
    return Rol.create(data)
}


// Get all roles
export function getRol(data) {
    return Rol.findAll(data)
}


// Update Rol
export function actualizarUsuario(data, id) {
    return Rol.update(data, {
        where: { id_rol: id }
    })
}

// Delete Rol
export function deleteRol(id) {
    return Rol.destroy({
        where: { id_rol: id }
    })
}


// Get rol for name
export function getRolName(name) {
    return Rol.findOne({
        where: { name: name }
    })
}