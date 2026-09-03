import { createDepartment, getDepartment, updateDepartment, deleteDepartment, getDepartmentName } from "../repositorys/RepositoryDepartment";

export function registerDepartment(data) {

    if (!data.name) {
        return new Promise.reject(new Error("Incomplete Fields..."))
    }
    return createDepartment(data)
}

export function listDepartment() {
    return getDepartment()
}

export function modifyDepartment(data, id) {
    if (!id) {
        return new Promise.reject(new Error("The ID is required..."))
    }

    return updateDepartment(data)
}

export function deleteUser(id) {
    if (!id) {
        return new Promise.reject(new Error("The ID is required..."))
    }
}

export function searchDepartmentByName(name) {
    if (!name) {
        return new Promise.reject(new Error("The Name is required..."))
    }
}