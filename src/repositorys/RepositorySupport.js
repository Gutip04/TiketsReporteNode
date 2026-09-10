import { Support } from "../models/ModelSupport.js";

export function CreateSupport(data){
    return Support.create(data)
}