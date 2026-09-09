import { Router } from "express";
import { list, create, destroy, searchName, update } from "../controllers/ControllerWorkTeam.js";
const router = Router()

router.get("/WorkTeam", list)
router.get("/WorkTeam/:name", searchName)

router.post("/WorkTeam", create)
router.delete("/WorkTeam/:id", destroy)
router.patch("/WorkTeam/:id", update)

export default router