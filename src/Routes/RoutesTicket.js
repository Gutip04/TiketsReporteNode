import { Router } from "express";
import { CreateTI } from "../controllers/ControllerTicket.js";

const router = Router();

router.post("/ticket", CreateTI);

export default router