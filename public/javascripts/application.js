
angular.module('agenda', ['ngCookies']);
angular.module("agenda", []).controller("userController", ["$scope","$http",'$cookies' , function($scope, $http, $cookies){
     $http.get("../api/categoria").then(function(response){
          $scope.categoryList = response.data;
          console.log($scope.categoryList)
     })
    $http.get("../api/contacto").then(function(response){
         $scope.userList = response.data;
     })

     //Autenticar
     $scope.autenticar = function(){
         var data = {
             nick: $scope.nickAUTH,
             contrasena: $scope.passAUTH
         }
         $http({
           method: 'post',
           url: '../api/usuario/autenticar',
           data: data,
           headers: {"Content-Type":"application/json"}
            }).success(function(response){
            	console.log(response)
            if(response.auth == true){
                $cookies.put("UDI", response.data.idUsuario);
                $cookies.put("UNA", response.data.nombre);
                $cookies.put("UNI", response.data.nick);
                window.location = response.location
            }else{
                $scope.error="Error en el API para Contactos"
            }
           })
     }

     //Cargar datos
    $scope.agregarUS=function(){
        var data = {
            nombre: $scope.nombreUS,
            apellido: $scope.apellidoUS,
            telefono: $scope.telefonoUS,
            correo: $scope.correoUS,
            idCategoria: $scope.categoriaUS
        }
       $http({
           method: 'post',
           url: '../api/contacto',
           data: data,
           headers: {"Content-Type":"application/json"}
       }).success(function(response){
            if(response.Mensaje == true){
                $("#closeAGUSMO").click();
            }else{
                $scope.error="Error en el API para Contactos"
            }
       })
    } 
           
}]);