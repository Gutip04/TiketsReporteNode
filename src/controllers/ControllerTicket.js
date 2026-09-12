import { response } from "express";
import { RegisterTicket, listTicket, modifyTicket, removeTicket, searchByID } from "../services/ServiceTicket.js";

export function CreateTI(req, res) {
    RegisterTicket(req.body)
        .then((response) => {
            res.status(201).json(response)
        })
        .catch((error) => {
            res.status(400).json({error: error.message})
        })
}

export function listTI(req, res) {
    listTicket()
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(500).json({error: error.message})
        })
}

export function updateTI(req, res) {
    modifyTicket(req.body, req.params.id)
        .then((response) => {
            res.status(201).json({ message: "User Updated successfully "})        
        })
        .catch((error) => {
            res.status(400).json({error: error.message})
        })
}

export function destroyTI(req, res) {
    removeTicket(req.params.id)
        .then((response) => {
            res.status(201).json({ message: "User destroy successfully " })
        })
        .catch((error) => {
            res.status(400).json({error: error.message})
        })
}

export function searchId_TI(req, res){
    searchByID(req.params.id)
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(500).json({ error: error.message })
        })
}