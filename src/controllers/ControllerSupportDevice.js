import { registerSupportDevice, listSupportDevice, modifySupportDevice} from "../services/ServicesSupportDevice.js"


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
            return res.status(400).json({error: error.message})
        })
}

//Update Support Device
export function UpdateSD(req, res){
    modifySupportDevice(req.body)
        .then((response) => {
            return res.status(201).json({message: "Support device Updated successfully"})
        })
        .catch((error) => {
            return res.status(400).json({error: error.message})
        })
}