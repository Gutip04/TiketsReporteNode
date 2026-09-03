import { createSpecialization, getSpecialization, updateSpecialization, deleteSpecialization, getSpecializationName } from "../repositorys/RepositorySpecialization.js";

// register one Specialization
export function registerSpecialization(data) {

    if (!data.name) {
        return new Promise.reject(new Error("Incomplete Fields..."))
    }
    return createSpecialization(data)
}


//  list all Specialization
export function listSpecialization() {
    return getSpecialization()
}

// update Specialization
export function modifySpecialization(data, id) {
    if (!id) {
        return new Promise.reject(new Error("The ID is required..."))
    }

    return updateSpecialization(data)
}


// delete Specialization
export function deleteSpecialization(id) {
    if (!id) {
        return new Promise.reject(new Error("The ID is required..."))
    }
}

// search Specialization by Name
export function searchSpecializationByName(name) {
    if (!name) {
        return new Promise.reject(new Error("The Name is required..."))
    }

    return getSpecializationName(name)
}