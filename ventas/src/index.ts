import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { VentasRoutes } from './routes/index.js';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Microservicio de Ventas ejecutandose en: ' + port);
});

app.use('/ventas', VentasRoutes);

app.listen(port, () => {
  console.log("Microservicio de Ventas escuchando en el puerto " + port);
});
