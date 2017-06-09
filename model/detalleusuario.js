var database = require("./database");
var detalleusuario = {}

    detalleusuario.select = function(idUsuario, callback){
    if(database){
      database.query("SELECT de.idDetalleUsuario,con.* FROM detalleusuario de INNER JOIN contacto con ON de.idContacto= con.idContacto WHERE de.idUsuario = ?;", idUsuario,
       function(error,resultado){
       if(error) {
          throw error;
        } else {
          callback(null, resultado);
        }
       });
    }
    }
    detalleusuario.insert = function(data, callback){
        if(database){
            database.query('INSERT INTO detalleusuario(idUsuario, idContacto) VALUES(?,?);', data, function(error, respuesta){
                if(error){
                    throw error;
                }else{
                    callback(null, respuesta);
                }
            });
        }
    }
    detalleusuario.update = function(data, callback){
        if(database){
            database.query('UPDATE detalleusuario SET idUsuario=? , idContacto=? WHERE idDetalleUsuario=? ;', data, function(error, respuesta){
                if(error){
                    throw error;
                }else{
                    callback(null, respuesta);
                }
            });
        }
    }
    detalleusuario.delete = function(idDetalleUsuario, callback){
        if(database){
            database.query('DELETE FROM detalleusuario WHERE idDetalleUsuario=?;', idDetalleUsuario, function(error, respuesta){
                if(error){
                    throw error;
                }else{
                    callback(null, respuesta);
                }
            });
        }
    }

module.exports = detalleusuario
