import { where } from "sequelize";
import { SupportDevice } from "../models/ModelSupportDevice.js";

//Create Supported Device
export function CreateDevice(data){
    return SupportDevice.create(data)
}