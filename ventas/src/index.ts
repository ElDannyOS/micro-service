import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { VentasRoutes } from "./routes/index.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get ("/", (req, res) => {
    res.send("Microservicio Ventas ejecutandose en el puerto " + port);
});

app.use("/ventas", VentasRoutes);

app.listen(port, () => {
    console.log("Microservicio Ventas ejecutandose en el puerto " + port);
});