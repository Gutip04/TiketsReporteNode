import { createPriority, getPriority, updatePriority, deletePriority, getPriorityName } from "../repositorys/RepositoryPriority.js";

//register one priority

export function registerPriority(data){
    if(
        !data.name
    ){
        return new Promise.reject(new Error("Incomplete fields ..."))
    } 
    return createPriority(data)

}

//list all Priority 
export function listPriority(){
    return getPriority()
}

//Update Priority 
export function modifyPriority(data, id){
    if(!id){
        return new Promise.reject(new Error("The ID is required ..."))
    }
    return updatePriority(data, id)
}

//delete priority
export function removePriority(id){
    if(!id){
        return new Promise.reject(new Error("The ID is required..."))
    }
    return deletePriority(id)
}

//search Priority by name 
export function searchPriorityByName(name){
    if(!name){
        return new Promise.reject(new Error("The name is required... "))
    }
    return getPriority(name)
}
