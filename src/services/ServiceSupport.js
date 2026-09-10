import { CreateSupport, GetSupport, UpdateSupport, DeleteSupport } from "../repositorys/RepositorySupport.js";

export function registerSupport(data){
    if(!data.comment){
        return new Promise.reject(new Error("Incomplete Fields..."));
    }

    return CreateSupport(data);
}

export function listSupport(){
    return GetSupport()
}


export function modifySupport(id, data){
    if(!id){
        return new Promise.reject(new Error("The ID is required..."));
    }

    return UpdateSupport(id, data);
}


export function removeSupport(id){
    if(!id){
            return new Promise.reject(new Error("The ID is required..."))
    }

    return DeleteSupport(id);
}