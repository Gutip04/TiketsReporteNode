import { Router } from "express";
import { CreateTI, listTI } from "../controllers/ControllerTicket.js";

const router = Router();

router.post("/ticket", CreateTI);
router.get("/ticket", listTI);

export default router