import { SupportDevice } from "../models/ModelSupportDevice.js";

//Create Supported Device
export function CreateDevice(data){
    return SupportDevice.create(data)
}

//Get All Supported Devices
export function GetDevice(data){
    return SupportDevice.findAll(data)
}