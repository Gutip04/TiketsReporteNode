import { Router } from "express";
import { createSU, listSU, UpdateSU } from "../controllers/ControllerSupport.js";

const router = Router();

router.post("/support",  createSU);
router.get("/support", listSU);
router.patch("/support/:id", UpdateSU);

export default router