import { CreateDevice, GetDevice, DeleteDevice, UpdateDevice, GetDeviceName } from "../repositorys/RepositorySupportDevice.js";

export function registerDeviceSupport(data){
    if(
        !data.name ||
        !data.description ||
        !data.type ||
        !data.status 
    ){
        return new Promise.reject(new Error("Incomplete Fields..."));
    }

    return CreateDevice(data)
};


export function listSupportDevice(){
    return GetDevice()
}


export function modifySupportDevice(id, data){
    if(!id){
        return new Promise.reject(new Error("The ID is required..."));
    }

    return UpdateDevice(id, data);
}


export function removeSupportDevice(id){
    if(!id){
        return new Promise.reject(new Error("The ID is required..."));
    }

    return DeleteDevice();
}

export function searchSupportDevice(name){
    if(!name){
        return new Promise.reject(new Error("The name is required..."));
    }

    return GetDeviceName();
}