import { registerRol, deleteRol, listRol, modifyRol, searchRolByName } from "../services/ServicesRol.js";


// create Rol
export function Create(req, res) {
    registerRol(req.body)
        .then((response) => {
            res.status(201).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

// list All Rol
export function list(req, res) {
    listRol()
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(500).json({ error: error.message })
        })
}

// search one Rol
export function searchName(req, res) {
    searchRolByName(req.body.name)
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(500).json({ error: error.message })
        })
}


// Update Rol
export function update(req, res) {
    modifyRol(req.body, req.params.id)
        .then((response) => {
            res.status(201).json({ message: "Rol created successfully " })
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}


// delete Rol
export function destroy(req, res) {
    deleteRol(req.params.id)
        .then((response) => {
            res.status(201).json({ message: "Rol destroy successfully " })
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}
