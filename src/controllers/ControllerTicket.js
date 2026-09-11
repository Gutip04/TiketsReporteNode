import { response } from "express";
import { RegisterTicket, listTicket } from "../services/ServiceTicket.js";

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