import { Router } from "express";
import { createSD } from "../controllers/ControllerSupportDevice.js";

const router = Router()

router.post("/supportDevice", createSD);

export default router