import { registerSupportDevice } from "../services/ServicesSupportDevice.js"
import { GetDevice } from "../repositorys/RepositorySupportDevice.js"


//Create Support Device
export function createSD(req, res){
    registerSupportDevice(req.body)
        .then((response) => {
            return res.status(201).json(response)
        })
        .catch((response) => {
            return res.status(400).json({error: error.message})
        })
}

//list All Device
export function listSD(req, res){
    GetDevice(req.body)
        .then((response) => {
            return res.status(201).json(response)
        })
        .catch((response) => {
            return res.status(400).json({error: error.message})
        })
}