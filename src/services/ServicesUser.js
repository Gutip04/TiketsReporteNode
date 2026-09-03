import { createUser, getUser, updateUser, deleteUser, getUserName } from "../repositorys/RepositoryUser.js";

// register one User
export function registerUser(data) {

    if (!data.name) {
        return new Promise.reject(new Error("Incomplete Fields..."))
    }
    return createUser(data)
}


//  list all User
export function listUser() {
    return getUser()
}

// update User
export function modifyUser(data, id) {
    if (!id) {
        return new Promise.reject(new Error("The ID is required..."))
    }

    return updateUser(data)
}


// delete User
export function deleteUser(id) {
    if (!id) {
        return new Promise.reject(new Error("The ID is required..."))
    }
}

// search User by Name
export function searchUserByName(name) {
    if (!name) {
        return new Promise.reject(new Error("The Name is required..."))
    }

    return getUserName(name)
}