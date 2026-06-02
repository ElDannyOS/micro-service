import {router} from 'express';
import {crearVenta, getAll} from '../controllers/ventas.controller.js';

const router = Router();

// GET /ventas
router.get("/all", getAll);

router.post("/crear", crearVenta);

export default router;