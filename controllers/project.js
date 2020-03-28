'use strict'

var controller={

  home:function(req,res){
    return res.status(200).send({
      message:"soy la Home"
    });
  },

  test:function(req,res){
    res.status(200).send({
        message:"soy el metodo test del controlador"
    });
  }



};


module.exports=controller;
