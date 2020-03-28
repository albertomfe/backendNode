'use strict'

var mongoose = require('mongoose');//cargar el modulo mongoose para la conexion
var app=require('./app');//cargar la conficuracion de el archivo app.js se omite la extencion al importar
var port =3700;//establecer el puerto


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio', {  useUnifiedTopology: true, useNewUrlParser: true,useCreateIndex: true })
.then(()=>{
  console.log("Conexion establecida ..");

  //crear el servidor si se conecta
  app.listen(port,()=>{
    console.log('servidor corriendo en la url  localhost:/3700');
  });
}).catch(err =>console.log(err));//realizar la conexion con la ruta de la bd
