import { WorkTeam } from "../models/ModelWorkTeam.js";
//create WorkTeam
export function createWorkTeam(data){
    return WorkTeam.create(data)
}

//Get WorkTeam
export function getWorkTeam(data){
    return WorkTeam.findAll(data)
}

//Update WorkTeam
export function updateWorkTeam(data, id){
    return WorkTeam.update(data,{
        where: {id_WorkTeam: id}
    })
}

//Delete User
export function deleteWorkTeam(id){
    return WorkTeam.destroy({
        where: {id_WorkTeam: id}
    })
}

//Get WorkTeam for name 
export function getWorkTeamName(name){
    return WorkTeam.findOne({
        where: {name: name}
    })
}