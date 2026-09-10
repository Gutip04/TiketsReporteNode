import { Support } from "../models/ModelSupport.js";

//Create Support
export function CreateSupport(data){
    return Support.create(data)
}

//Get All Support
export function GetSupport(data){
    return Support.findAll(data)
}

