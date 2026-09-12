import { Ticket } from "../models/ModelTicket.js";

//Create Ticket
export function CreateTicket(data){
    return Ticket.create(data)
}

//Get Ticket
export function GetTicket(data){
    return Ticket.findAll(data)
}

//Update Ticket
export function UpdateTicket(data, id) {
    return Ticket.update(data, {
        where: {id_ticket: id}
    })
}

//Delete Ticket
export function DeleteTicket(id) {
    return Ticket.destroy({
        where: {id_ticket : id}
    })
}

//Get ticket By ID
export function GetID(id){
    return Ticket.findOne({
        where: {id_ticket : id}
    })
}