var router = require("express").Router();
var usuario = require("../model/usuario.js");

router.get("/api/usuario/", function(req,res){
    usuario.selectAll(function(error, resultado){
        if(error !== undefined){
            res.json(resultado)
        }else{
            res.json({Mensaje: false});
        }
    });
});
router.get("/api/usuario/:idUsuario", function(req, res){
    usuario.select(req.params.idUsuario,function(error, resultado){
        if(error !== undefined){
            res.json(resultado)
        }else{
            res.json({Mensaje: false})
        }
    });
});
router.post("/api/usuario/", function(req,res){
    usuario.insert([req.body.nick, req.body.contrasena], function(error, resultado){
        if(error!== undefined){
            res.json({Mensaje: true})
        }else{
            res.json({Mensaje: false})
        }
    });
});
router.put("/api/usuario/:idUsuario", function(req,res){
    if(req.params.idUsuario == req.body.idUsuario){

    usuario.update([req.body.nick, req.body.contrasena, req.body.idUsuario], function(error, resultado){
        if(error!== undefined){
            res.json({Mensaje: true})
        }else{
            res.json({Mensaje: false})
        }
    });
    }else{
         res.json({Mensaje: false, Respuesta: "ID incoherente"})
    }
});
router.delete("/api/usuario/:idUsuario", function(req,res){
       usuario.delete(req.params.idUsuario, function(error, resultado){
        if(error!== undefined){
            res.json({Mensaje: true})
        }else{
            res.json({Mensaje: false})
        }
    });
});
router.put("/api/usuario/:idUsuario", function(req,res){
       usuario.delete(req.body.idUsuario, function(error, resultado){
        if(error!== undefined){
            res.json({Mensaje: true})
        }else{
            res.json({Mensaje: false})
        }
    });
});
router.post("/api/usuario/autenticar", function(req,res) {
    usuario.autenticar([req.body.nick, req.body.contrasena], function(error, respuesta){
        if(respuesta.length != 0){
            res.json({auth: true, location: "/usuario/", data: respuesta[0]});
        }else{
            res.json({auth: false, location: ""});
        }
    });
});
module.exports = router;