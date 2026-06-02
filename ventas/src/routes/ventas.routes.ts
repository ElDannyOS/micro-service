import { Router } from 'express';
import {
    getAll,
    getById,
    getByUsuarioId,
    create,
    update,
    deleteVenta
} from '../controllers/ventas.controller.js';

const router = Router();

// GET /ventas/all
router.get('/all', getAll);

// GET /ventas/usuario/:usuarioId
router.get('/usuario/:usuarioId', getByUsuarioId);

// GET /ventas/:id
router.get('/:id', getById);

// POST /ventas
router.post('/', create);

// PUT /ventas/:id
router.put('/:id', update);

// DELETE /ventas/:id
router.delete('/:id', deleteVenta);

export default router;
