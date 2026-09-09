import {StatesTicket} from "../models/modelstates_Ticket.js";

// Create States Ticket
export function createStatesTicket(data) {
    return StatesTicket.create(data)
}

// Get all States Ticket
export function getStatesTicket(data) {
    return StatesTicket.findAll(data)
}

// Update States Ticket 

export function updateStatesTicket(data, id) {
    return StatesTicket.update(data, {
        where: { id: id }
    })
}

// Delete States Ticket

export function deleteStatesTicket(id) {
    return StatesTicket.destroy({
        where: { id: id }
    })
}


// Get States Ticket for name
export function getStatesTicketName(name) {
    return StatesTicket.findOne({
        where: { name:name }
    })
}   