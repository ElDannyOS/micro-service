import axios from 'axios';

const productos = axios.create({
    baseURL: "http://localhost:4002"
});

export const getAllProductos = async () => {
    const {data} = await productosApi.get("/productos");
    return data;
}