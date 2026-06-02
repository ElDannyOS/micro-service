import axios from 'axios';
import { type Request, type Response } from 'express';

const eventBroker = axios.create({
    baseURL: 'http://localhost:4001',
});

const ventas: any[] = [];

export const getAll = (req: Request, res: Response) => {
    return res.status(200).json({message: "Ok", ventas});
};

export const crearVenta = async (req: Request, res: Response) => {
    const {data} = req.body;

    const {uid, id_producto, cantidad} = data;
    const {data: usuario} = await eventBroker.post("events",
        {
            event: "GET_USUARIOS",
        });

    const {data: producto} = await eventBroker.post("events", {
        event: "GET_PRODUCTOS",
    });

    const venta = {
        usuario: usuario.usuarios.usuarios[0],
        producto: producto.productos.productos[0],
        cantidad,
        precio: {
            unidad: producto.productos.productos[0]?.precio,
            total: producto.productos.productos[0]?.precio * cantidad,
        },
    };

    ventas.push(venta);

    return res.status(200).json({message: "Ok", venta});
};