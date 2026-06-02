import {type Request, type Response} from 'express';
import {IUsuario} from '../interfaces/usuarios.intetface.js';

const usuarios: IUsuario[] = [
    {
        id: "1",
        nombre: "Usuario Unico",
        correo: "micorreo@algo.com"
    }
]

export const getAll = (req: Request, res: Response) => {
    return res.status(200).json({message: "OK", usuarios});
}