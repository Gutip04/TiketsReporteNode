import { Router } from "express";
import { createSU, listSU, UpdateSU, destroySU } from "../controllers/ControllerSupport.js";

const router = Router();

router.post("/support",  createSU);
router.get("/support", listSU);
router.patch("/support/:id", UpdateSU);
router.delete("/support/:id", destroySU);

export default router