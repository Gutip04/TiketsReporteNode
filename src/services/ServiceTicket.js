import { CreateTicket, GetTicket, UpdateTicket, DeleteTicket } from "../repositorys/RepositoryTicket.js";

export function RegisterTicket(data){
    if(!data.title){
        return new Promise.reject(new Error("Incomplete Fields..."));
    }

    return CreateTicket(data);
}

export function listTicket(){
    return GetTicket();
}

export function modifyTicket(data, id){
    if(!id){
        return new Promise.reject(new Error("The ID is required..."))
    }

    return UpdateTicket(data, id)
}

export function removeTicket(id){
    if(!id){
        return new Promise.reject(new Error("The ID is required..."))
    }

    return DeleteTicket(id)
}