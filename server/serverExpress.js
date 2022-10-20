// ======================> Modulos Implementados <======================
import express from "express";
import cors from "cors";
import {pool} from './conecctionDB.js';

// ======================> Creacion Express <======================
const app = express();

// ======================> Configuracion Express / CORS  <======================
app.use(cors({
  origin: 'http://127.0.0.1:5173'
}));

// ======================> Rutas Express <======================

app.get('/api/test', async (req, res) => {
  const [ResponseDB] = await pool.query('SELECT * FROM teams');
  res.json(ResponseDB).status(200);
});


// ======================> Rutas NOT FOUND <======================
app.use((req, res) => {
  res.send('404');
});

// ======================> Inicializacion Express <======================
app.listen(3001, () => {
  console.log('Escuchando puerto 3000');
});