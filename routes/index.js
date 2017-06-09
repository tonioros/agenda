var express = require('express');
var router = express.Router();

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