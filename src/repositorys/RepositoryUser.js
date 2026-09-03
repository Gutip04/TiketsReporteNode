import { User } from "../models/ModelUser.js"
// Create User
export function createUser(data) {
    return User.create(data)
}


// Get all User
export function getUser(data) {
    return User.findAll(data)
}


// Update User
export function updateUser(data, id) {
    return User.update(data, {
        where: { id_User: id }
    })
}

// Delete User
export function deleteUser(id) {
    return User.destroy({
        where: { id_User: id }
    })
}


// Get User for name
export function getUserName(first_name) {
    return User.findOne({
        where: { first_name: first_name }
    })
}