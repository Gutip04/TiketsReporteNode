import { SupportDevice } from "../models/ModelSupportDevice.js";
import { Department } from "../models/ModelDepartment.js";

// Create Supported Device
export function CreateDevice(data){
    return SupportDevice.create(data);
}

// Get All Supported Devices
export function GetDevice(){
    return SupportDevice.findAll({
        attributes: [
            "id_device",
            "name",
            "description",
            "type",
            "status"
        ],
        include: [
            {
                model: Department,
                attributes: ["name"]
            }
        ]
    });
}

// Update Supported Device
export function UpdateDevice(id, data){
    return SupportDevice.update(data, {
        where: { id_device: id }
    });
}

// Delete Supported Device
export function DeleteDevice(id){
    return SupportDevice.destroy({
        where: { id_device: id }
    });
}

// Get Supported Device by name
export function GetDeviceName(name){
    return SupportDevice.findOne({
        where: { name: name },
        attributes: [
            "id_device",
            "name",
            "description",
            "type",
            "status"
        ],
        include: [
            {
                model: Department,
                attributes: ["name"]
            }
        ]
    });
}