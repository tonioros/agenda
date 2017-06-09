var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/autenticar', function(req, res, next) {
  res.render("autenticar");
});

router.get('/registrar', function(req, res, next) {
  res.render("registrar");
});


router.get('/usuario', function(req, res, next) {
  res.render("usuario/index");
});

module.exports = router;