import {type Request, type Response} from 'express';
import {type IProducto } from '../interfaces/productos.inteface.js';

const productos: IProducto[] = [
    {
        id: "1",
        nombre: 'Computador Producto 1',
        precio: 1500,
        descripcion: 'Laptop Lenovo ThinkPad'
    }
];

export const getAll = (req: Request, res: Response) => {
    return res.status(200).json({message: 'OK'});
}