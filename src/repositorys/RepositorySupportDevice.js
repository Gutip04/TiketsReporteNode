import { where } from "sequelize";
import { SupportDevice } from "../models/ModelSupportDevice";

//Create SupportDevice
export function createSupportDevice(data){
    return SupportDevice.create(data);
}

//Get All SupportDevice
export function GetSupportDevice(data){
    return SupportDevice.findAll(data)
}

//Update SupportDevice
export function UpdateSupportDevice(data, id){
    return SupportDevice.update(data,{
        where: {id_device: id}
    })
}

//Delete SupportDevice
export function DeleteSupportDevice(id){
    return SupportDevice.destroy({
        where: {id_device: id}
    })
}

//Get Device for name
export function GetDeviceName(name){
    return SupportDevice.findOne({
        where: {name_device : name}
    })
}