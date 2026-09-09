import { CreateDevice } from "../repositorys/RepositorySupportDevice.js";

export function registerSupportDevice(data){
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

