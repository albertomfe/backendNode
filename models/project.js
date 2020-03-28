'use strict'

var mongoose = require('mongoose');//cargar el modulo mongoose para la conexion
var Schema=mongoose.Schema;

//crear el Modelo de la Tabla
var projectSchema=Schema({
  name:String,
  Description:String,
  category:String,
  langs:[String],
  year:Number
});

/*
primer parametro es el nombre de la collecion donde guardar lo hace minusculas y lo pluraliza
segundo paraetro es el modelo a usar
*/
module.exports | mongoose.model('Project',projectSchema);
