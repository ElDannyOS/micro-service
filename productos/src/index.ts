import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Microservicio de Productos ejecutandose en: ' + port);
});

app.listen(port, () => {
  console.log("Microservicio de Productos escuchando en el puerto " + port);
});