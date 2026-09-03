import { createRol, getRol, updateRol, deleteRol, getRolName } from "../repositorys/RepositoryRol.js";

// register one Rol
export function registerRol(data) {

    if (!data.name) {
        return new Promise.reject(new Error("Incomplete Fields..."))
    }
    return createRol(data)
}


//  list all Rol
export function listRol() {
    return getRol()
}

// update Rol
export function modifyRol(data, id) {
    if (!id) {
        return new Promise.reject(new Error("The ID is required..."))
    }

    return updateRol(data)
}


// delete Rol
export function deleteRol(id) {
    if (!id) {
        return new Promise.reject(new Error("The ID is required..."))
    }
}

// search Rol by Name
export function searchRolByName(name) {
    if (!name) {
        return new Promise.reject(new Error("The Name is required..."))
    }

    return getRolName(name)
}