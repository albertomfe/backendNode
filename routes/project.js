'use strict'

var express =require('express');
var ProjectController=require('../controllers/project');


var router=express.Router();
//lib para subir imagenes
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: './uploads' });
/*
  crer la ruta qeu accede al metodo home del controlador projecto
*/
router.get('/home',ProjectController.home);
router.post('/test',ProjectController.test);
router.post('/save-project',ProjectController.saveProject);
router.get('/project/:id?',ProjectController.getProject);
router.get('/projects',ProjectController.getProjects);
router.put('/project/:id',ProjectController.updateProject);//put para actualizar
router.delete('/project/:id',ProjectController.deleteProject);//borrar proyecto
router.post('/upload-image/:id', multipartMiddleware, ProjectController.uploadImage);
//router.get('/get-image/:image', ProjectController.getImageFile);

module.exports=router;
