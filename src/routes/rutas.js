const { Router } = require('express');
const res = require('express/lib/response');
const router = Router();

//Esto de aqui es equivalente a lo de arriba
//const express = require (express);
//const router = express.Router();

const empresa =require('./data.json');
console. log(empresa);

//rutas

router.get('/empresa/servicio/fecha', (req,res) => {

    res.json(empresa);

});

router.get('/empresa/servicio/fecha/:id', (req,res) => {

  const {id} = req.params;
  empresa.forEach(tipo => {
      if(tipo.id == id)
      {
          res.json(tipo);
          console.log(tipo.tipoqueja);
          console.log(tipo.colonia);
          console.log(tipo.fecha);
      }
  });
  console.log(empresa[id].tipoqueja);
  console.log(empresa[id].colonia);
  console.log(empresa[id].fecha);
 
 
 
  console.log(id);

});


router.post('/empresa/queja/fecha', (req,res) => {
    const {tipo, colonia, fecha} = req.body;
    //verificacion
    if(tipoqueja && colonia&& fecha){
        const id = empresa.length +1;
        const nuevoEmpresa = {...req.body,id};
        empresa.push(nuevoEmpresa);
         // console.log(nuevoDataloca);

        //res.send(dataloca);
        res.status(200).json(empresa);
    } else {
        res.status(500).json({error:'no data'});
       // res.send("Err 32: No Data");
    }
    

    res.send("ok");

});


/* router.get('/empresa/fecha', (req,res) =>{
    const data = {
        "name": "Andrea U",
        "id": "1234"

        };
    res.json(data);
 });*/

 /*router.post('/',(req,res) => {
     console.log(req.body);
     res.send("ok");
 })*/

 module.exports = router;