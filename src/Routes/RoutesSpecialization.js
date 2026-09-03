import { Router } from "express"
import { list, create, destroy, searchName, update } from "../controllers/ControllerSpecialization.js"
const router = Router()

router.get("/specialization",list)
router.get("/specialization/:name",searchName)

router.post("/specialization",create)
router.delete("/specialization/:id",destroy)
router.patch("/specialization/:id",update)