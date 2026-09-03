import { Router } from "express"
import { list, create, destroy, searchName, update } from "../controllers/ControllerDepartment.js"
const router = Router()

router.get("/deparment",list)
router.get("/deparment/:name",searchName)

router.post("/department",create)
router.delete("/department/:id",destroy)
router.patch("/department/:id",update)