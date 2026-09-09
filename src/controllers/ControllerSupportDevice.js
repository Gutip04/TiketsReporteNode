import { response } from "express"
import { registerSupportDevice } from "../services/ServicesSupportDevice.js"


//Create Support Device
export function createSD(req, res){
    registerSupportDevice(req.body)
        .then((response) => {
            return res.status(201).json(response)
        })
        .catch((response) => {
            return res.status(400).json(response)
        })
}