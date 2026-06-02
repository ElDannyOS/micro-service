import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import UsuarioRoutes from "./routes/usuarios.routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());

app.get("/", (req, res) => {
    res.send(`Microservicio de Usuarios en ejecución: ${port}`);
});

app.use("/usuarios", UsuarioRoutes);

app.listen(port, () => {
    console.log(`Microservicio de Usuarios en ejecución en el puerto ${port}`);
});