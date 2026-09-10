import { Support } from "../models/ModelSupport.js";

//Create Support
export function CreateSupport(data){
    return Support.create(data)
}

//Get All Support
export function GetSupport(data){
    return Support.findAll(data)
}

//Update Support
export function UpdateSupport(id, data){
    return Support.update(data, {
        where: {id_support : id}
    })
}

//Delete Support
export function DeleteSupport(id){
    return Support.destroy({
        where: {id_support : id}
    })
}