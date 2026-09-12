import { Router } from "express";
import { CreateTI, listTI, updateTI, destroyTI } from "../controllers/ControllerTicket.js";

const router = Router();

router.post("/ticket", CreateTI);
router.get("/ticket", listTI);
router.patch("/ticket/:id", updateTI);
router.delete("/ticket/:id", destroyTI);

export default router