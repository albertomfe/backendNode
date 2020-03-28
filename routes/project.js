'use strict'

var express =require('express');
var ProjectController=require('../controllers/project');


var router=express.Router();

/*
  crer la ruta qeu accede al metodo home del controlador projecto
*/
router.get('/home',ProjectController.home);
router.post('/test',ProjectController.test);

module.exports=router;
