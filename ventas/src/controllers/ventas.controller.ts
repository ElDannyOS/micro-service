import { type Request, type Response } from 'express';
import { type IVenta, type IProductoVenta } from '../interfaces/index.js';

const ventas: IVenta[] = [
    {
        id: '1',
        usuarioId: '1',
        productos: [
            { productoId: '1', cantidad: 2, precio: 1500 }
        ],
        total: 3000,
        fecha: new Date('2024-01-15'),
        estado: 'entregada'
    }
];

export const getAll = (req: Request, res: Response) => {
    return res.status(200).json({ message: 'OK', ventas });
};

export const getById = (req: Request, res: Response) => {
    const { id } = req.params;
    const venta = ventas.find(v => v.id === id);
    
    if (!venta) {
        return res.status(404).json({ message: 'Venta no encontrada' });
    }
    
    return res.status(200).json({ message: 'OK', venta });
};

export const getByUsuarioId = (req: Request, res: Response) => {
    const { usuarioId } = req.params;
    const ventasUsuario = ventas.filter(v => v.usuarioId === usuarioId);
    
    if (ventasUsuario.length === 0) {
        return res.status(404).json({ message: 'No hay ventas para este usuario' });
    }
    
    return res.status(200).json({ message: 'OK', ventas: ventasUsuario });
};

export const create = (req: Request, res: Response) => {
    const { usuarioId, productos } = req.body;
    
    if (!usuarioId || !productos || !Array.isArray(productos) || productos.length === 0) {
        return res.status(400).json({ 
            message: 'usuarioId y productos (array no vacío) son requeridos' 
        });
    }
    
    const total = productos.reduce((sum: number, p: IProductoVenta) => sum + (p.precio * p.cantidad), 0);
    const newVenta: IVenta = {
        id: String(Math.max(...ventas.map(v => Number(v.id)), 0) + 1),
        usuarioId,
        productos,
        total,
        fecha: new Date(),
        estado: 'pendiente'
    };
    
    ventas.push(newVenta);
    return res.status(201).json({ message: 'Venta creada', venta: newVenta });
};

export const update = (req: Request, res: Response) => {
    const { id } = req.params;
    const { estado } = req.body;
    
    const venta = ventas.find(v => v.id === id);
    
    if (!venta) {
        return res.status(404).json({ message: 'Venta no encontrada' });
    }
    
    if (estado) {
        venta.estado = estado;
    }
    
    return res.status(200).json({ message: 'Venta actualizada', venta });
};

export const deleteVenta = (req: Request, res: Response) => {
    const { id } = req.params;
    const index = ventas.findIndex(v => v.id === id);
    
    if (index === -1) {
        return res.status(404).json({ message: 'Venta no encontrada' });
    }
    
    const deletedVenta = ventas.splice(index, 1)[0];
    return res.status(200).json({ message: 'Venta eliminada', venta: deletedVenta });
};
