import { Router } from "express";
import { createSU, listSU, UpdateSU, destroySU, searchID_SU } from "../controllers/ControllerSupport.js";

const router = Router();

router.post("/support",  createSU);
router.get("/support", listSU);
router.patch("/support/:id", UpdateSU);
router.delete("/support/:id", destroySU);
router.get("/support/:id", searchID_SU);

export default router