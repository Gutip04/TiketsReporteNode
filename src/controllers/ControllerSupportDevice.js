import { registerSupportDevice, listSupportDevice, modifySupportDevice, removeSupportDevice, searchSupportDevice} from "../services/ServicesSupportDevice.js"


//Create Support Device
export function createSD(req, res){
    registerSupportDevice(req.body)
        .then((response) => {
            return res.status(201).json(response)
        })
        .catch((error) => {
            return res.status(400).json({error: error.message})
        })
}

//list All Device
export function listSD(req, res){
    listSupportDevice(req.body)
        .then((response) => {
            return res.status(201).json(response)
        })
        .catch((error) => {
            return res.status(500).json({error: error.message})
        })
}

//Update Support Device
export function UpdateSD(req, res){
    modifySupportDevice(req.params.id, req.body)
        .then((response) => {
            return res.status(200).json({message: "Support device Updated successfully"})
        })
        .catch((error) => {
            return res.status(500).json({error: error.message})
        })
}

//Delete Support Device
export function destroySD(req, res){
    removeSupportDevice(req.params.id)
        .then((response) => {
            return res.status(201).json({message: "User destroy successfully "})
        })
        .catch((error) => {
            return res.status(400).json({error: error.message})
        })
}

export function searchNameSD(req, res){
    searchSupportDevice(req.params.name)
        .then((response) => {
            return res.status(201).json({response})
        })
        .catch((error) => {
            return res.status(400).json({ error: error.message })
        })
}