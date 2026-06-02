export interface IProductoVenta {
    productoId: string;
    cantidad: number;
    precio: number;
}

export interface IVenta {
    id: string;
    usuarioId: string;
    productos: IProductoVenta[];
    total: number;
    fecha: Date;
    estado: 'pendiente' | 'confirmada' | 'enviada' | 'entregada' | 'cancelada';
}
