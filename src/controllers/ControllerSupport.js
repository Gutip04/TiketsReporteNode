import { registerSupport, listSupport, modifySupport, removeSupport, searchSupport } from "../services/ServiceSupport.js";

// Create Support
export function createSU(req, res){
    registerSupport(req.body)
        .then((response) => {
            return res.status(201).json(response);
        })
        .catch((error) => {
            return res.status(400).json({ error: error.message });
        });
}

// List Support
export function listSU(req, res){
    listSupport()
        .then((response) => {
            return res.status(200).json(response);
        })
        .catch((error) => {
            return res.status(500).json({ error: error.message });
        });
}

// Update Support
export function UpdateSU(req, res){
    modifySupport(req.params.id, req.body)
        .then(() => {
            return res.status(200).json({ message: "Support Updated successfully" });
        })
        .catch((error) => {
            return res.status(500).json({ error: error.message });
        });
}

// Delete Support
export function destroySU(req, res){
    removeSupport(req.params.id)
        .then(() => {
            return res.status(200).json({ message: "Support destroyed successfully" });
        })
        .catch((error) => {
            return res.status(400).json({ error: error.message });
        });
}

// Search Support by ID
export function searchID_SU(req, res){
    searchSupport(req.params.id)
        .then((response) => {
            return res.status(200).json(response);
        })
        .catch((error) => {
            return res.status(400).json({ error: error.message });
        });
}