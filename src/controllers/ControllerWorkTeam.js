import { registerWorkTeam, listWorkTeam, modifyWorkTeam, searchWorkTeamByName, removeWorkTeam} from "../services/ServicesWorkTeam.js";

//create user
export function create(req, res){
    registerWorkTeam(req.body)
        .then((response)=>{
            res.status(201).json(response)
        })
        .catch((error)=>{
            res.status(400).json({error: error.message})
        })
}

//list all WorkTeam 
export function list(req, res){
    listWorkTeam()
        .then((response)=>{
            res.status(200).json(response)
        })
        .catch((error)=>{
            res.status(500).json({error: error.message })
        })
}

//search one Work Team 
export function searchName(req, res){
    searchWorkTeamByName(req.params.name)
        .then((response)=>{
            res.status(200).json(response)
        })
        .catch((error)=>{
            res.status(500).json({error: error.message})
        })
}

//update WorkTeam
export function update(req, res){
    modifyWorkTeam(req.body, req.params.id)
        .then((response)=>{
            res.status(201).json({message: "Workteam update succesfully"})
        })
            
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

//delete user
export function destroy(req, res){
    removeWorkTeam(req.params.id)
        .then((response)=>{
            res.status(201).json({message: "WorkTeam destroy succesfully"})
        })
        .catch((error)=>{
            res.status(400).json({error: error.message })
        })
}