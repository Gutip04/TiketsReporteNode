import { Support } from "../models/ModelSupport.js";
import { User } from "../models/modelUser.js";
import { Ticket } from "../models/ModelTicket.js";

// Create Support
export function CreateSupport(data){
    return Support.create(data);
}

// Get All Support
export function GetSupport(){
    return Support.findAll({
        attributes: ["id_support", "comment"],
        include: [
            {
                model: User,
                attributes: ["id_user", "first_name", "last_name"]
            },
            {
                model: Ticket,
                attributes: ["id_ticket", "title", "description"]
            }
        ]
    });
}

// Update Support
export function UpdateSupport(id, data){
    return Support.update(data, {
        where: { id_support: id }
    });
}

// Delete Support
export function DeleteSupport(id){
    return Support.destroy({
        where: { id_support: id }
    });
}

// Get Support by ID
export function GetID(id){
    return Support.findOne({
        where: { id_support: id },
        attributes: ["id_support", "comment"],
        include: [
            {
                model: User,
                attributes: ["id_user", "first_name", "last_name"]
            },
            {
                model: Ticket,
                attributes: ["id_ticket", "title", "description"]
            }
        ]
    });
}