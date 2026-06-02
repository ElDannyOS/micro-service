import { Router } from 'express';
import { getAll } from '../controlller/productos.controller.js';

const router = Router();

//Get /productos/all
router.get('/all', getAll);

export default router;