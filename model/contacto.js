var database = require('./database');
var contacto = {};

contacto.selectAll = function(callback) {
  if(database) { 
    database.query("SELECT con.* , cat.nombre AS nombreCategoria FROM contacto con INNER JOIN categoria cat ON cat.idCategoria = con.idContacto",
    function(error, resultados) {
      if(error) {
        throw error;
      } else {
        callback(null, resultados);
      }
    });//Fin query
  }//Fin IF
}//FIN SelectAll

contacto.select = function(idContacto, callback) {
  if(database) {
    var sql = "SELECT con.* , cat.nombre FROM contacto con INNER JOIN categoria cat ON cat.idCategoria = con.idContacto WHERE idContacto = ?";
    database.query(sql, idContacto,
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, resultado);
      }
    });//Fin query
  }//Fin IF
}//FIN SelectAll

contacto.insert = function(data, callback) {
  if(database) {
    database.query("INSERT INTO Contacto(nombre,apellido,telefono,correo,idCategoria) VALUES(?,?,?,?,?);", data,
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, {"insertId": resultado.insertId});
      }
    });//Fin query
  }//Fin IF
}//FIN SelectAll

contacto.update = function(data, callback) {
  if(database) {
    var sql = "UPDATE Contacto SET "
    +"nombre = ?, apellido = ?, direccion = ?, telefono = ?, correo = ?, idCategoria = ?  "
    +"WHERE idContacto = ?";
    database.query(sql,
    [data.nombre, data.apellido, data.direccion, data.telefono, data.correo, data.idCategoria, data.idContacto],
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, data);
      }
    });//Fin query
  }//Fin IF
}//FIN SelectAll

contacto.delete = function(idContacto, callback) {
  if(database) {
    var sql = "DELETE FROM Contacto WHERE idContacto = ?";
    database.query(sql, idContacto,
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, {"Mensaje": "Eliminado"});
      }
    });//Fin query
  }//Fin IF
}//FIN SelectAll


module.exports = contacto;
