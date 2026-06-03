import {type Request, type Response} from 'express';
import {getAllProductos} from './productos.controller.js';
import {ProductosEvent} from '../enums/productos.enum.js';
import {getAllUsuarios} from './usuarios.controller.js';
import {UsuariosEvent} from '../enums/usuarios.enum.js';
import {VentasEvent} from '../enums/ventas.enum.js';
import { crearVenta, getAllVentas } from './ventas.controller.js';

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

    if (event === VentasEvent.GET_VENTAS) {
        const ventas = await getAllVentas();
        return res.status(200).json({
            ventas,
        });
    }

    if (event === VentasEvent.CREATE_VENTAS) {
        const venta = await crearVenta(data);
        return res.status(200).json({
            venta,
        });
    }

    return res.status(400).json({
        message: "Evento no reconocido",
    });
}