'use strict'

var controller={

  home:function(req,res){
    return res.status(200).send({
      message:"soy la Home"
    });
  },

  test:function(){
    res.status(200).send({
        message:"hola mundo desde api node js"
    });
  }



};


module.exports=controller;
