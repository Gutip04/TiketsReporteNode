import { Ticket } from "../models/ModelTicket.js";

//Create Ticket
export function CreateTicket(data){
    return Ticket.create(data)
}

