
import {createStatesTicket,getStatesTicket,updateStatesTicket,deleteStatesTicket,getStatesTicketName} from "../repositorys/RepositoryStates_ticket.js";


// register one States Ticket
export function registerStatesTicket(data) {

    if (!data.name) {
        return new Promise.reject(new Error("Incomplete Fields..."))
    }
    return createStatesTicket(data)
}


//  list all States Ticket
export function listStatesTicket() {
    return getStatesTicket()
}

// update States Ticket
export function modifyStatesTicket(data, id) {
    if (!id) {
        return new Promise.reject(new Error("The ID is required..."))
    }

    return updateStatesTicket  (data, id)
}


// delete States Ticket
export function removeStatesTicket(id) {
    if (!id) {
        return new Promise.reject(new Error("The ID is required..."))
    }

    return deleteStatesTicket(id)
}

// search States Ticket by Name
export function searchStatesTicketByName(name) {
    if (!name) {
        return new Promise.reject(new Error("The Name is required..."))
    }

    return getStatesTicketName(name)
}