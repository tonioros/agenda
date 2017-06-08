var express = require('express');
var router = express.Router();
var Autenticar = require("../helper/autenticar")
var auth = new Autenticar();

/* GET home page. */
router.get('/', function(req, res, next) {
  auth.autorizar(req);
  res.render(auth.getPath() + "index");
});

router.get('/cookies', function(req, res, next) {
  res.status(200).send(req.cookies);
});

router.get('/autenticar', function(req, res, next) {
  res.render("dashboard/autenticar");
});

router.get('/registrar', function(req, res, next) {
  res.render("registrar");
});

router.get('/usuario', function(req, res, next) {
  res.render("usuario/index");
});

module.exports = router;