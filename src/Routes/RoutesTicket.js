import { Router } from "express";
import { CreateTI, listTI, updateTI, destroyTI, searchId_TI} from "../controllers/ControllerTicket.js";

const router = Router();

router.post("/ticket", CreateTI);
router.get("/ticket", listTI);
router.patch("/ticket/:id", updateTI);
router.delete("/ticket/:id", destroyTI);
router.get("/ticket/:id", searchId_TI);

export default router