import { CreateTicket } from "../repositorys/RepositoryTicket.js";

export function RegisterTicket(data){
    if(!data.title){
        return new Promise.reject(new Error("Incomplete Fields..."));
    }

    return CreateTicket(data);
}