import { Ticket } from "../models/ModelTicket.js";

//Create Ticket
export function CreateTicket(data){
    return Ticket.create(data)
}

//Get Ticket
export function GetTicket(data){
    return Ticket.findAll(data)
}

