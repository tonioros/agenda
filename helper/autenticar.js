var Autenticacion = function(){
    var path = "default/"
    var acceso = false;
    var idUsuario = 0;

    this.getPath= function(){
        return path;
    }
    this.getAcceso= function(){
        return acceso;
    }
    this.getIdUsuario = function(){
        return idUsuario;
    }
    this.autorizar = function(req){
        var cookie = req.cookie;
        if(cookie.nick !== undefined && cookie.idUsuario !== undefined){
            path = "Dashboard/"
            acceso = true;
            idUsuario = cookie.idUsuario
        }else{
            path = "Default/"
            acceso = false;
            idUsuario = 0
        }
    }
    return this;
}
module.exports = Autenticacion;