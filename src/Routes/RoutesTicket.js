import { Router } from "express";
import { CreateTI, listTI, updateTI } from "../controllers/ControllerTicket.js";

const router = Router();

router.post("/ticket", CreateTI);
router.get("/ticket", listTI);
router.patch("/ticket/:id", updateTI);

export default router