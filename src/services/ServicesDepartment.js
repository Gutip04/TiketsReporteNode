import { createDepartment, getDepartment, updateDepartment, deleteDepartment, getDepartmentName } from "../repositorys/RepositoryDepartment.js";

// register one Department
export function registerDepartment(data) {

    if (!data.name) {
        return new Promise.reject(new Error("Incomplete Fields..."))
    }
    return createDepartment(data)
}


//  list all Department
export function listDepartment() {
    return getDepartment()
}

// update Department
export function modifyDepartment(data, id) {
    if (!id) {
        return new Promise.reject(new Error("The ID is required..."))
    }

    return updateDepartment(data, id)
}


// delete Department
export function removeDepartment(id) {
    if (!id) {
        return new Promise.reject("The ID is required...")
    }

    return deleteDepartment(id)

}

// search Department by Name
export function searchDepartmentByName(name) {
    if (!name) {
        return new Promise.reject(new Error("The Name is required..."))
    }

    return getDepartmentName(name)
}