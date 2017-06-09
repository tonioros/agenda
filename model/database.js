var mysql = require("mysql");
var parametros = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'agenda'
};
try{
var connection = mysql.createConnection(parametros);
}catch(ex){
  parametros.database="agenda";
var connection = mysql.createConnection(parametros);
}

module.exports = connection;
