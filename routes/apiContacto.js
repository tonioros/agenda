var contacto = require('../model/contacto');
var router = require('express').Router();

router.get('/api/contacto/ID/:idUsuario', function(req, res) {
  contacto.selectAll(req.params.idUsuario,function(error, resultados){
    if(typeof resultados !== undefined) {
      res.json(resultados);
    } else {
      res.json({"Mensaje": "No hay contactos"});
    }
  });
});

router.get('/api/contacto/:idContacto',
  function(req, res) {
    var idContacto = req.params.idContacto;
    contacto.select(idContacto, function(error, resultados){
      if(typeof resultados !== undefined) {
        res.json(resultados);
      } else {
        res.json({"Mensaje": false});
      }
  });
});

router.post('/api/contacto', function(req, res) {
  var data = [ req.body.idUsuario, req.body.nombre, req.body.apellido, req.body.direccion, req.body.telefono, req.body.correo, req.body.idCategoria]
  contacto.insert(data, function(err, resultado) {
    if(resultado && resultado.insertId > 0) {
      res.json({Mensaje: true})
    } else {
      res.json({"Mensaje": false});
    }
  });
});

router.put('/api/contacto/:idContacto', function(req, res) {
  var idContacto = req.params.idContacto;
  var data = {
    idContacto : req.body.idContacto,
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    direccion: req.body.direccion,
    telefono: req.body.telefono,
    correo: req.body.correo,
    idCategoria: req.body.idCategoria
  }

  if(idContacto === data.idContacto){
    contacto.update(data, function(err, resultado) {
      if(resultado !== undefined) {
         res.json({Mensaje: true})
      } else {
          res.json({Mensaje: false})
      }
    });
  } else {
    res.json({"Mensaje": "No concuerdan los datos"});
  }
});

router.delete('/api/contacto/', function(req, res) {
	var data = [req.body.idContacto, req.params.idUsuario];
    contacto.delete(data, function(error, resultado){
      if(resultado && resultado.Mensaje === "Eliminado") {
         res.json({Mensaje: true})
      } else {
         res.json({Mensaje: false})
      }
  });
});


module.exports = router;
