import { Router } from "express";
import { list, create, destroy, searchName, update } from "../controllers/ControllerWorkTeam.js";
const router = Router()

router.get("/WorkTeam", list)
router.get("/WorkTeam/:name", searchName)

router.post("/Work", create)
router.delete("/user/:id", destroy)
router.patch("/user/:id", update)

export default router