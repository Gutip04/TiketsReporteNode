import { registerSupport, listSupport, modifySupport, removeSupport } from "../services/ServiceSupport.js";


//Create Support Device
export function createSU(req, res){
    registerSupport(req.body)
        .then((response) => {
            return res.status(201).json(response)
        })
        .catch((error) => {
            return res.status(400).json({error: error.message})
        })
}

export function listSU(req, res){
    listSupport(req.body)
        .then((response) => {
            return res.status(201).json(response)
        })
        .catch((error) => {
            return res.status(400).json({error: error.message})
        })
}

export function UpdateSU(req, res){
    modifySupport(req.params.id, req.body)
        .then((response) => {
            return res.status(201).json({message: "Support Updated successfully"})
        })
        .catch((error) => {
            return res.status(400).json({error: error.message})
        })
}

export function destroySU(req, res){
    removeSupport(req.params.id)
        .then((response) => {
            return res.status(201).json({message: "Support destroy successfully "})
        })
        .catch((error) => {
            return res.status(400).json({error: error.message})
        })
}