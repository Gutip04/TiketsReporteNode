import { Router } from "express"
import { list, create, destroy, searchName, update } from "../controllers/ControllerUser.js"
const router = Router()

router.get("/user",list)
router.get("/user/:first_name",searchName)

router.post("/user",create)
router.delete("/user/:id",destroy)
router.patch("/user/:id",update)

export default router