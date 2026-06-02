import { Router } from "express"
import { getAll } from "../controller/usuario.controller.js";

const router = Router();

// GET /usuarios/all
router.get("/all", getAll);

export default router;