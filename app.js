const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static('public'));


//CREAR LAS RUTAS
app.get('/', (req, res)=> res.sendFile(path.join(__dirname,'./views','home.html')));



//ESCUCHAR EL SERVIDOR
app.listen (port, ()=> console.log(`Servidor corriendo de manera satisfactoria: `+ port ));
