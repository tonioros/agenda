var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log(req.cookies.UNI);
  if( req.cookies.UNI === undefined){
   res.render('index',{title:"Agenda", opciones: '<a href="/autenticar">Autenticar</a>'} );
  }else{
   res.redirect("/usuario");
  }
});

router.get('/autenticar', function(req, res, next) {
  res.render("autenticar", {title:"Autenticar | Agenda", opciones: '<a href="/autenticar">Autenticar</a>'});
});

router.get('/registrar', function(req, res, next) {
  
  res.render("registrar", {title:"Registrare | Agenda", opciones: '<a href="/autenticar">Autenticar</a>'});
});


router.get('/usuario', function(req, res, next) {
  if(typeof req.cookies.UNI != undefined){
  var nombre = req.cookies.UNI;
  res.render("usuario/index",{title:"Agenda", saludo: "¡Hola "+nombre+"!, aca tienes tus contactos", opciones: '<a href="usuario/categoria">Categorias</a><a href="#">Cerrar Sesion</a>'});
  }else{
    res.redirect("/")
  }
});

router.get('/usuario/categoria', function(req, res, next) {
  if(typeof req.cookies.UNI != undefined){
  var nombre = req.cookies.UNI;
  res.render("categoria/index",{title: "Categorias | Agenda", saludo: "¡Hola "+nombre+"!, aca tienes tus categorias", opciones: '<a href="usuario/categoria">Categorias</a><a href="#">Cerrar Sesion</a>'});
  }else{
    res.redirect("/")
  }
});
module.exports = router;