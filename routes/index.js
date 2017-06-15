var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log(req.cookies.UNI);
  if( req.cookies.UNI == null){
   res.render('index',{title:"Agenda", opciones: '<a href="/autenticar">Autenticar</a><a href="/registrar">Registrate</a>'} );
  }else{
   res.redirect("/usuario");
  }
});

router.get('/autenticar', function(req, res, next) {
  res.render("autenticar", {title:"Autenticar | Agenda", opciones: '<a href="/autenticar">Autenticar</a><a href="/registrar">Registrate</a>'});
});

router.get('/registrar', function(req, res, next) {
    res.render("registrar", {title:"Registrare | Agenda", opciones: '<a href="/autenticar">Autenticar</a><a href="/registrar">Registrate</a>'});
});

router.get('/error', function(req, res, next) {
    res.render("error", {title:"Error | Agenda", opciones: '<a href="/autenticar">Autenticar</a><a href="/registrar">Registrate</a>'});
});


router.get('/usuario', function(req, res, next) {
  if(req.cookies.UNI != null){
  var nombre = req.cookies.UNI;
  res.render("usuario/index",{title:"Agenda", saludo: "¡Hola "+nombre+"!, aca tienes tus contactos", opciones: '<a href="/usuario/categoria">Categorias</a><a href="/usuario/cita">Citas</a><a href="" onclick="cerrarS()">Cerrar Sesion</a>'});
  }else{
    res.redirect("/")
  }
});

router.get('/usuario/categoria', function(req, res, next) {
  if(req.cookies.UNI != null){
  var nombre = req.cookies.UNI;
  res.render("categoria/index",{title: "Categorias | Agenda", saludo: "¡Hola "+nombre+"!, aca tienes tus categorias", opciones: '<a href="/usuario/categoria">Categorias</a><a href="/usuario/cita">Citas</a><a href="" onclick="cerrarS()">Cerrar Sesion</a>' });
  }else{
    res.redirect("/")
  }
});

router.get('/usuario/cita', function(req, res, next) {
  if(req.cookies.UNI != null){
  var nombre = req.cookies.UNI;
  res.render("citas/index",{title: "Cita | Agenda", saludo: "¡Hola "+nombre+"!, aca tienes tus categorias", opciones: '<a href="/usuario/categoria">Categorias</a><a href="/usuario/cita">Citas</a><a href="" onclick="cerrarS()">Cerrar Sesion</a>'});
  }else{
    res.redirect("/")
  }
});

module.exports = router;