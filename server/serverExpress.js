// crear servidor express

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola Mundo');
});

app.listen(3000, () => {
  console.log('Escuchando puerto 3000');
});
 

app.use( (req, res) => {
    res.send('404');
})