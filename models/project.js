'use strict'

var mongoose = require('mongoose');//cargar el modulo mongoose para la conexion
var Schema=mongoose.Schema;
//mongoose.connect('mongodb://localhost:27017/portafolio', {  useUnifiedTopology: true, useNewUrlParser: true,useCreateIndex: true })

//crear el Modelo de la Tabla
var projectSchema=Schema({
  name:String,
  description:String,
  category:String,
  langs:[String],
  year:Number,
  image:String
});

/*
primer parametro es el nombre de la collecion donde guardar lo hace minusculas y lo pluraliza
segundo paraetro es el modelo a usar
*/
module.exports = mongoose.model('Project',projectSchema);
//module.exports | mongoose.model('Project',projectSchema);
