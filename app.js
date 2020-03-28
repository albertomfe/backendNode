'use strict'

var express = require('express');//cargar express
var bodyParser=require('body-parser');//cargar boddy parser

var app =express();

//cargar archios de rutas


//middleware => capa qeu se ejecuta antes del controlador
app.use(bodyParser.urlencoded({extended:false}));//convertir todo los datos post a json
app.use(bodyParser.json());//convertir peticion a json

//CORS


//rutas
app.get('/',(req,res)=>{
  res.status(200).send(
    "<h1>Home</h1>"
  );
});

/**############################# EJEMPLOS APIS TIPOS ####################################*/
//ejemplo get recibe un resquest y manda una respuesta
app.get('/test',(req,res)=>{
  //si se envia parametros
  console.log(req.query.nombre);
  res.status(200).send({message:"hola mundo desde api node js"});
});

//ejemplo post  recibe un resquest y manda una respuesta
app.post('/prueba_post',(req,res)=>{

  console.log(req.body.nombre);

  res.status(200).send({message:"hola mundo desde api node js POST"});
});


//ejemplo recibe un resquest con parametros obligatorios
/*en este caso almacenara el primer parametro en una variable Id*/
app.post('/prueba_params/:id',(req,res)=>{

  console.log(req.params.id);

  res.status(200).send({message:"hola mundo desde api node js POST"});
});

//exportar
module.exports =app;//obtener toda la configuracio
