const express = require('express'); //solicitar cosas
const app = express(); //la aplicación 
const morgan = require('morgan'); //sacar las respuestas del servidor

//Configuraciones
app.set('port', 3000);
app.set('json spaces',2);

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//rutas
app.use('/api',require('./routes/rutas'));
app.use('/api',require('./routes/rutas'));
app.use('/api',require('./routes/rutas'));

//aqui puedes poner todos los archivos que necesites

/*app.get('/', (req,res) =>{
   res.send('si funciona!');
});

app.get('/home', (req,res) =>{
    res.send('estas en el HOME');
 });*/

//Empezando el servidor
app.listen(app.get('port'));
console.log("mi primer servidor");
