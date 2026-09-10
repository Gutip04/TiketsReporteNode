import { Router } from "express"
import { list, create, destroy, searchName, update } from "../controllers/ControllerStates_ticket.js"

const router = Router()

router.get("/StatesTicket",list)
router.get("/StatesTicket/:name",searchName)

router.post("/StatesTicket",create)
router.delete("/StatesTicket/:id",destroy)
router.patch("/StatesTicket/:id",update)

export default router