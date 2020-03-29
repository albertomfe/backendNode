'use strict'

var Project=require('../models/project');//Importar el Modelo


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
  }


};


module.exports=controller;
