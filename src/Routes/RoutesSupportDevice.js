import { Router } from "express";
import { createSD, listSD, UpdateSD } from "../controllers/ControllerSupportDevice.js";

const router = Router()

router.post("/supportDevice", createSD);
router.get("/supportDevice", listSD);
router.patch("/supportDevice/:id", UpdateSD);

export default router