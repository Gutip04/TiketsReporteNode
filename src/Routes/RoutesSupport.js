import { Router } from "express";
import { createSU } from "../controllers/ControllerSupport.js";

const router = Router();

router.post("/support",  createSU);

export default router