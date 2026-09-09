import { Router } from "express";
import { list, create, destroy, searchName, update } from "../controllers/ControllerPriority";
const router = Router()

router.get("/priority",list)
router.get("/priority/:name", searchName)

router.post("/priority", create)
router.delete("/priority/:id", destroy)
router.patch("/priority/:id", update)

export default router