import { Router } from "express"
import { list, create, destroy, searchName, update } from "../controllers/ControllerDepartment.js"
const router = Router()

router.get("/department",list)
router.get("/department/:name",searchName)

router.post("/department",create)
router.delete("/department/:id",destroy)
router.patch("/department/:id",update)

export default router