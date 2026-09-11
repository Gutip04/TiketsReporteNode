import { CreateTicket, GetTicket } from "../repositorys/RepositoryTicket.js";

export function RegisterTicket(data){
    if(!data.title){
        return new Promise.reject(new Error("Incomplete Fields..."));
    }

    return CreateTicket(data);
}

export function listTicket(){
    return GetTicket();
}