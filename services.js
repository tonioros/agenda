var jwt = require('jsonwebtoken');
var services = {};
services.verificar = function(req, res, next) {
	console.log("Funcion Verificar");
	var token = services.getToken(req, res);
	jwt.verify(token, 'in6av', function(err, decoded) {
		if(err) {
			res.json({
				success: false,
				mensaje: "Error en el token",
				error: err
			});
		} else {
			console.log("Token valido");
			req.token = token;
			next();
		}
	});
}

services.getToken = function(req, res) {
	console.log(req.headers)
	var header = req.headers.authorization;
	if (typeof header != 'undefined') {
		var headerArray = header.split(" ");
		//var token = headerArray[1];
		var token = headerArray.pop();
		if(token) {
			return token;
		} else {
			console.log("No Existe el token");
			res.json({
				estado: false,
				mensaje: "No existen el token"
			});
		}
	} else {
		console.log("No Existe la cabecera Authorization");
		res.json({
			estado: false,
			mensaje: "No Existe la cabecera Authorization"
		});
	}
}

module.exports = services;
