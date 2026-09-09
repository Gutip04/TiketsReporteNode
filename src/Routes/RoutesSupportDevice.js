import { Router } from "express";
import { createSD } from "../controllers/ControllerSupportDevice.js";
import { listSD } from "../controllers/ControllerSupportDevice.js";

const router = Router()

router.post("/supportDevice", createSD);
router.get("/supportDevice", listSD);

export default router