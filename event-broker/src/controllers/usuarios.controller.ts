import axios from 'axios';

const usuariosApi = axios.create({
    baseURL: "http://localhost:4003/usuarios"
});

export const getAllUsuarios = async () => {
    const {data} = await usuariosApi.get("/all");
    return data;
}