import express , {type Request, type Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { request } from "node:http";
import axios from "axios";

dotenv.config();

const port = process.env.PORT;

const app = express();

app.use(cors);

app.use(express.json());

app.post("/api/v1", async (req: Request, res: Response) => {
    const {event, data: requestData} = req.body;
    if (!event){
        return res.status(400).json({message: "Evento requerido",})
    }

    try {
        const {data} = await axios.post("http://localhost:3001/events", {event, requestData});
        return res.status(200).jason({message: "Success", data,})
    } catch (error){
        return res.status(500).json({message:"Error", error})
    }
});

app.listen(port, () =>{
    console.log("API-GATEWAY ejecutandose en el puerto: ", port);
});