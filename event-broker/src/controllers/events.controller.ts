import {type Request, type Response} from 'express';
import {getAllProductos} from './productos.controller.js';
import {ProductosEvent} from '../enums/productos.enum.js';
import {getAllUsuarios} from './usuarios.controller.js';
import {UsuariosEvent} from '../enums/usuarios.enum.js';

export const eventBrokerController = async (req: Request, res: Response) => {
    const {event, data} = req.body;

    if (event === ProductosEvent.GET_PRODUCTOS) {
        const productos = await getAllProductos();
        return res.status(200).json({
            productos,
        });
    }

    if (event === UsuariosEvent.GET_USUARIOS) {
        const usuarios = await getAllUsuarios();
        return res.status(200).json({
            usuarios,
        });
    }

    return res.status(400).json({
        message: "Evento no reconocido",
    });
}