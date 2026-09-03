import { registerDepartment, removeDepartment, listDepartment, modifyDepartment, searchDepartmentByName } from "../services/ServicesDepartment.js";


// create Department
export function create(req, res) {
    registerDepartment(req.body)
        .then((response) => {
            res.status(201).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

// list All Department
export function list(req, res) {
    listDepartment()
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(500).json({ error: error.message })
        })
}

// search one Department
export function searchName(req, res) {
    searchDepartmentByName(req.params.name)
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(500).json({ error: error.message })
        })
}


// Update Department
export function update(req, res) {
    modifyDepartment(req.body, req.params.id)
        .then((response) => {
            res.status(201).json({ message: "Department Update successfully " })
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}


// delete Department
export function destroy(req, res) {
    removeDepartment(req.params.id)
        .then((response) => {
            res.status(201).json({ message: "Department destroy successfully " })
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}
