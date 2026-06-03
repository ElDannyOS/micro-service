import axios from "axios";

const ventasApi = axios.create({
    baseURL: "http://localhost:4004/ventas"
});

interface IVenta {
    uid: string;
    id_producto: string;
    cantidad: number;
};

export const getAllVentas = async () => {
    const {data} = await ventasApi.get("/all");
    return data;
};

export const crearVenta = async (payload: IVenta) => {
    const {data} = await ventasApi.post("/create", payload);
    return data;
};