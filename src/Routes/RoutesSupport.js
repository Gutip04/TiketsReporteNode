import { Router } from "express";
import { createSU, listSU } from "../controllers/ControllerSupport.js";

const router = Router();

router.post("/support",  createSU);
router.get("/support", listSU);

export default router