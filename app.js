'use strict'

var express = require('express');//cargar express
var bodyParser=require('body-parser');//cargar boddy parser

var app =express();

//cargar archios de rutas
var project_routes=require('./routes/project');

//middleware => capa qeu se ejecuta antes del controlador
app.use(bodyParser.urlencoded({extended:false}));//convertir todo los datos post a json
app.use(bodyParser.json());//convertir peticion a json

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

/*
voy a cargar todas las rutas con un antecesor de api
*/
//rutas
app.use('/api',project_routes);


//exportar
module.exports =app;//obtener toda la configuracio
