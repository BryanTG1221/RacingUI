import express from 'express';
import { Await } from 'react-router-dom';
export const router  = express.Router();
import { pool } from './conecctionDB.js';

router.get('/api/teams', async (req, res) => {
    const [ResponseDB] = await pool.query('SELECT * FROM teams');
    res.json(ResponseDB).status(200);
  });

router.get('/api/drivers', async (req, res) => {
    const [ResponseDB] = await pool.query('SELECT * FROM drivers');
    res.json(ResponseDB).status(200);
  });

router.get('/api/drivers/:driverName',async (req, res) => {
    const DriverName = req.params.driverName;
    const [responseDB] = await pool.query(`SELECT * FROM drivers WHERE nameDriver = '${DriverName}' OR lastnameDriver = '${DriverName}'`);
    res.json(responseDB).status(200);
});

router.post('/api/drivers', async (req, res) => {
    const driver = req.body;
    const { name, lastName,nacionality,number,championship,wins,podiums,driverPhoto,helmetPhoto,gradientColor } = driver;
    const [ResponseDB] = await pool.query(`INSERT INTO drivers (nameDriver, lastNameDriver,countryDriver,numberDriver,worldChampionships,winsDriver,podiumsDriver,driverImage,helmetImage,gradientColor) VALUES ('${name}','${lastName}','${nacionality}',${number},${championship},${wins},${podiums},'${driverPhoto}','${helmetPhoto}','${gradientColor}')`);
    res.json(ResponseDB).status(200);
});

router.patch('/api/drivers',async (req,res) => {
  const driverChanged = req.body;
  console.log(driverChanged)
});