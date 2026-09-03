import { Router } from "express"
import { list, create, destroy, searchName, update } from "../controllers/ControllerRol.js"
const router = Router()

router.get("/rol",list)
router.get("/rol/:name",searchName)

router.post("/rol",create)
router.delete("/rol/:id",destroy)
router.patch("/rol/:id",update)