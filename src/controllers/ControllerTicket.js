import { response } from "express";
import { RegisterTicket } from "../services/ServiceTicket.js";

export function CreateTI(req, res) {
    RegisterTicket(req.body)
        .then((response) => {
            res.status(201).json(response)
        })
        .catch((error) => {
            res.status(400).json({error: error.message})
        })
}