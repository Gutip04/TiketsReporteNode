import { registerUser, removeUser, listUser, modifyUser, searchUserByName } from "../services/ServicesUser.js";


// create User
export function create(req, res) {
    registerUser(req.body)
        .then((response) => {
            res.status(201).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

// list All User
export function list(req, res) {
    listUser()
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(500).json({ error: error.message })
        })
}

// search one User
export function searchName(req, res) {
    searchUserByName(req.params.first_name)
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(500).json({ error: error.message })
        })
}


// Update User
export function update(req, res) {
    modifyUser(req.body, req.params.id)
        .then((response) => {
            res.status(201).json({ message: "User Updated successfully " })
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}


// delete User
export function destroy(req, res) {
    removeUser(req.params.id)
        .then((response) => {
            res.status(201).json({ message: "User destroy successfully " })
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}
