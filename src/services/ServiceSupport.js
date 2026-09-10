import { CreateSupport } from "../repositorys/RepositorySupport.js";

export function registerSupport(data){
    if(!data.comment){
        return new Promise.reject(new Error("Incomplete Fields..."));
    }

    return CreateSupport(data);
}