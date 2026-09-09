import { createWorkTeam, getWorkTeam, updateWorkTeam, deleteWorkTeam, getWorkTeamName } from "../repositorys/RepositoryWorkTeam.js";
//Register one WorkTeam
export function registerWorkTeam(data){
    if(
        !data.name
    ) {
        return new  Promise.reject(new Error("Incomplete Fields..."))
    }
    return createWorkTeam(data)
}

// list all WorkTeam
export function listWorkTeam(){
    return getWorkTeam()
}

//Update WorkTeam
export function modifyWorkTeam(data, id){
    if(!id){
        return new Promise.reject(new Error("The id is required..."))
    }
    return updateWorkTeam(data, id)
}

//delete WorkTeam
export function removeWorkTeam(id) {
    if(!id){
        return new Promise.reject(new Error("The id is required..."))
    }
    return deleteWorkTeam(id)
}

//search WorkTeam by name
export function searchWorkTeamByName(name){
    if(!name){
        return new Promise.reject(new Error("The name is required..."))
    }
    return getWorkTeamName(name)
}