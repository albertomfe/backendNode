'use strict'

var Project=require('../models/project');//Importar el Modelo
var fs = require('fs');


var controller={

  home:function(req,res){
    return res.status(200).send({
      message:"soy la Home"
    });
  },

  test:function(req,res){
    return res.status(200).send({
        message:"soy el metodo test del controlador"
    });
  },

  saveProject:function(req,res){

    var project=new Project();//crear un Objeto de proyecto

    var params=req.body;
    project.name=params.name;
    project.description=params.description;
    project.category=params.category;
    project.langs=params.langs;
    project.year=params.year;
    project.image=null;

    /*guardar el objeto en la base de datos con funcion callback*/
    project.save((err,projectStore)=>{
      if(err) return res.status(500).send({message:"error al Guardar"});
      if(!projectStore)return res.status(404).send({message:"no se pudo guardar el proyecto"});
      return res.status(200).send({project:projectStore});
    });
    /*return  res.status(200).send({
      project:project,
      message:"proyecto Guardado"
    });*/
  },

  getProject:function(req,res){
    var projectId=req.params.id;

    if(projectId==null){
      return res.status(404).send({message:"no se recibio el Id"});
    }
    /*buscar un objeto*/
    Project.findById(projectId,(err,project)=>{

        if(err) return res.status(500).send({message:"error al obtener valor"});
        if(!project) return res.status(404).send({message:"El Documento no existe"});
        return res.status(200).send({project});
    });
  },


  getProjects:function(req,res){
    /*puedes buscar por cualquier parametro ejemplo Project.find({year:2019}) */
    /*para ordenar .sort('+year') el mas indica de mayor a menor el - inversa */
    Project.find({}).sort('+year').exec((err,projects)=>{
      if(err) return res.status(500).send({message:"No se Encontraron Resultados"});
      if(!projects) return res.status(404).send({message:"No Hay Proyectos"});
      return res.status(200).send({projects});
    });
  },


  updateProject:function(req,res){
    //actualizar proyecto
    var projectId=req.params.id;
    var update=req.body;/*obtener todo el objeto completo*/
    /*buscar un objeto*/
    Project.findByIdAndUpdate(projectId,update,{new:true},(err,projectUpdated )=>{
      if(err) return res.status(500).send({message:"Error al Actualizar"});
      if(!projectUpdated) return res.status(404).send({message:"No Existe el Proyecto para Actualizar"});
      return res.status(200).send({
        project:projectUpdated
      });
    });
  },


  deleteProject:function(req,res){
    //eliminar proyecto
    var projectId=req.params.id;

    /*buscar un objeto*/
    Project.findByIdAndRemove(projectId,(err,projectRemove )=>{
      if(err) return res.status(500).send({message:"Error al Borrar Proyecto"});
      if(!projectRemove) return res.status(404).send({message:"No Existe el Proyecto para Actualizar"});
      return res.status(200).send({
        project:projectRemove
      });
    });
  },

  /*Subir Imagen*/
  uploadImage: function(req, res){
		var projectId = req.params.id;
		var fileName = 'Imagen no subida...';

		if(req.files){
			var filePath = req.files.image.path;
			var fileSplit = filePath.split('\\');
			var fileName = fileSplit[1];
			var extSplit = fileName.split('\.');
			var fileExt = extSplit[1];

			if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){

				Project.findByIdAndUpdate(projectId, {image: fileName}, {new: true}, (err, projectUpdated) => {
					if(err) return res.status(500).send({message: 'La imagen no se ha subido'});

					if(!projectUpdated) return res.status(404).send({message: 'El proyecto no existe y no se ha asignado la imagen'});

					return res.status(200).send({
						project: projectUpdated
					});
				});

			}else{
				fs.unlink(filePath, (err) => {
					return res.status(200).send({message: 'La extensión no es válida'});
				});
			}

		}else{
			return res.status(200).send({
				message: fileName
			});
		}

	},


  /*Obtener Imagen*/
  /*getImageFile: function(req, res){
		var file = req.params.image;
		var path_file = './uploads/'+file;

		fs.exists(path_file, (exists) => {
			if(exists){
				return res.sendFile(path.resolve(path_file));
			}else{
				return res.status(200).send({
					message: "No existe la imagen..."
				});
			}
		});
	}*/



};


module.exports=controller;
