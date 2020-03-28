'use strict'

var express = require('express');//cargar express
var bodyParser=require('body-parser');//cargar boddy parser

var app =express();

//cargar archios de rutas
var project_routes=require('./routes/project');

//middleware => capa qeu se ejecuta antes del controlador
app.use(bodyParser.urlencoded({extended:false}));//convertir todo los datos post a json
app.use(bodyParser.json());//convertir peticion a json

//CORS

/*
voy a cargar todas las rutas con un antecesor de api
*/
//rutas
app.use('/api',project_routes);


//exportar
module.exports =app;//obtener toda la configuracio
