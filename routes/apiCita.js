var express = require('express');
var citas = require('../model/citas');
var router = express.Router();

router.get('/api/citas/ID/:idUsuario', function(req, res) {
  citas.selectAll(req.params.idUsuario,function(error, resultados){
    if(typeof resultados !== undefined) {
      res.json(resultados);
    } else {
      res.json({"Mensaje": "No hay citass"});
    }
  });
});

router.get('/api/citas/:idcitas',
  function(req, res) {
    var idcitas = req.params.idcitas;
    citas.select(idcitas,
      function(error, resultados){
      if(typeof resultados !== undefined) {
        res.json(resultados);
      } else {
        res.json({"Mensaje": "No hay citass"});
      }
  });
});

router.post('/api/citas', function(req, res) {
  var data = [req.body.nombre, req.body.idUsuario]
  citas.insert(data, function(err, resultado) {
    if(resultado && resultado.insertId > 0) {
       res.json({"Mensaje":true});
    } else {
      res.json({"Mensaje": false});
    }
  });
});

router.put('/api/citas/:idCitas', function(req, res) {
  var idcitas = req.params.idCita;
  var data = [
    req.body.lugar,
    req.body.descripcion,
    req.body.idContacto, 
    req.body.idCita
  ]                                                                                             

  if(idcitas == req.body.idCita) {
    citas.update(data, function(err, resultado) {
      if(typeof resultado !== undefined) {
        res.json(resultado);
      } else {
        res.json({"Mensaje": true});
      }
    });
  } else {
    res.json({"Mensaje": false});
  }
});

router.delete('/api/citas/',
  function(req, res) {
    var idcitas = req.body.idcitas;
    citas.delete(idcitas,
      function(error, resultado){
      if(resultado && resultado.Mensaje == "Eliminado") {
        res.json({"Mensaje": true});
      } else {
        res.json({"Mensaje": false});
      }
  });
});


module.exports = router;
