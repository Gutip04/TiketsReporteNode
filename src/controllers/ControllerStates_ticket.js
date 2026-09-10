

import { registerStatesTicket, removeStatesTicket, listStatesTicket, modifyStatesTicket, searchStatesTicketByName } from "../services/ServicesStates_ticket.js";


// create States Ticket
export function create(req, res) {
    registerStatesTicket(req.body)
        .then((response) => {
            res.status(201).json(response)
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}

// list All States Ticket
export function list(req, res) {
    listStatesTicket()
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(500).json({ error: error.message })
        })
}

// search one States Ticket
export function searchName(req, res) {
    searchStatesTicketByName(req.params.name)
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(500).json({ error: error.message })
        })
}


// Update States Ticket
export function update(req, res) {
    modifyStatesTicket(req.body, req.params.id)
        .then((response) => {
            res.status(201).json({ message: "States Ticket Updated successfully " })
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}


// delete States Ticket
export function destroy(req, res) {
    removeStatesTicket(req.params.id)
        .then((response) => {
            res.status(201).json({ message: "States Ticket   destroy successfully " })
        })
        .catch((error) => {
            res.status(400).json({ error: error.message })
        })
}
