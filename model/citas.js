var database = require('./database');
var citas = {};

citas.selectAll = function(ID,callback) {
  if(database) {
    database.query("SELECT * FROM cita WHERE idContacto= ?;",ID,
    function(error, resultados) {
      if(error) {
        throw error;
      } else {
        callback(null, resultados);
      }
    });//Fin query
  }//Fin IF
}//FIN SelectAll

citas.select = function(idcitas, callback) {
  if(database) {
    var sql = "SELECT * FROM cita WHERE idCita = ?";
    database.query(sql, idcitas,
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, resultado);
      }
    });//Fin query
  }//Fin IF
}//FIN SelectAll

citas.insert = function(data, callback) {
  if(database) {
    database.query("INSERT INTO citas(lugar, descripcion, idContacto, fecha) VALUES(?,?,?, NOW()) ", data,
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, {"insertId": resultado.insertId});
      }
    });//Fin query
  }//Fin IF
}//FIN SelectAll

citas.update = function(data, callback) {
  if(database) {
    var sql = "UPDATE citas SET lugar = ?, descripcion = ? , idContacto = ? WHERE idCita = ?";
    database.query(sql, data, function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, {"insertId": resultado.insertId});
      }
    });//Fin query
  }//Fin IF
}//FIN SelectAll

citas.delete = function(idcitas, callback) {
  if(database) {
    var sql = "DELETE FROM citas WHERE idCita = ?";
    database.query(sql, idcitas,
    function(error, resultado) {
      if(error) {
        //throw error;
      } else {
        callback(null, {"Mensaje": "Eliminado"});
      }
    });//Fin query
  }//Fin IF
}//FIN SelectAll


module.exports = citas;
