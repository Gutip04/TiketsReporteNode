import { registerPriority, removePriority, listPriority, modifyPriority, searchPriorityByName } from "../services/ServicesPriority.js";

//create priority
export function create(req, res) {
    registerPriority(req.body)
        .then((response) => {
            res.status(201).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

// list All Priority
export function list(req, res) {
    listPriority()
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

// search one priority
export function searchName(req, res) {
    searchPriorityByName(req.params.name)
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(500).json({ error: error.message })
        })
}

// Update priority
export function update(req, res) {
    modifyPriority(req.body, req.params.id)
        .then((response) => {
            res.status(201).json({ message: "Priority Updated successfully " })
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}


// delete priority
export function destroy(req, res) {
    removePriority(req.params.id)
        .then((response) => {
            res.status(201).json({ message: "Priority destroy successfully " })
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}
