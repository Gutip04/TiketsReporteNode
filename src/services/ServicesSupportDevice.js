import { CreateDevice, GetDevice, UpdateDevice, DeleteDevice, GetDeviceName } from "../repositorys/RepositorySupportDevice.js";

export function registerSupportDevice(data){
    if(
        !data.name ||
        !data.description ||
        !data.type ||
        !data.status ||
        !data.id_department
    ){
        return Promise.reject(new Error("Incomplete Fields..."));
    }

    return CreateDevice(data);
}

export function listSupportDevice(){
    return GetDevice();
}


export function modifySupportDevice(id, data){
    if(!id){
        return Promise.reject(new Error("The ID is required..."));
    }

    return UpdateDevice(id, data);
}


export function removeSupportDevice(id){
    if (!id) {
        return Promise.reject(new Error("The ID is required..."));
    }
    
    return DeleteDevice(id);
}



export function searchSupportDevice(name){
    if(!name){
        return Promise.reject(new Error("The name is required..."));
    }

    return GetDeviceName(name);
}