import { registerSpecialization, deleteSpecialization, listSpecialization, modifySpecialization, searchSpecializationByName } from "../services/ServicesSpecialization.js";


// create Specialization
export function create(req, res) {
    registerSpecialization(req.body)
        .then((response) => {
            res.status(201).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

// list All Specialization
export function list(req, res) {
    listSpecialization()
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(500).json({ error: error.message })
        })
}

// search one Specialization
export function searchName(req, res) {
    searchSpecializationByName(req.body.name)
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(500).json({ error: error.message })
        })
}


// Update Specialization
export function update(req, res) {
    modifySpecialization(req.body, req.params.id)
        .then((response) => {
            res.status(201).json({ message: "Specialization created successfully " })
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}


// delete Specialization
export function destroy(req, res) {
    deleteSpecialization(req.params.id)
        .then((response) => {
            res.status(201).json({ message: "Specialization destroy successfully " })
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}
