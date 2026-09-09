import { Router } from "express"
import { list, create, destroy, searchName, update } from "../controllers/ControllerRol.js"
const router = Router()

// guti
router.get("/role",list)
router.get("/role/:name",searchName)

router.post("/role",create)
router.delete("/role/:id",destroy)
router.patch("/role/:id",update)

export default router