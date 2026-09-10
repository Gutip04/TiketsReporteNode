import { priority } from "../models/ModelPriority.js";
//create priority
export function createPriority(data){
    return priority.create(data)
}

//Get all priority
export function getPriority(data){
    return priority.findAll(data)
}

//Update priority
export function updatePriority(data, id){
    return priority.update(data,{
        where:{id_priority: id}
    })
}

//delete priority
export function deletePriority(id){ 
    return priority.destroy({
        where: {id_priority: id}
    })
}

//Get Priority By name 
export function getPriorityName(name){
    return priority.findOne({
        where: {name: name}
    })
}