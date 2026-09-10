import { Router } from "express";
import { createSD, listSD, UpdateSD, destroySD, searchNameSD } from "../controllers/ControllerSupportDevice.js";

const router = Router()

router.post("/supportDevice", createSD);
router.get("/supportDevice", listSD);
router.patch("/supportDevice/:id", UpdateSD);
router.delete("/supportDevice/:id", destroySD);
router.get("/supportDevice/:name", searchNameSD);

export default router