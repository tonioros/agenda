angular.module("agenda", []).controller("userController", ["$scope","$http" , function($scope, $http){
     $http.get("../api/categoria").then(function(response){
          $scope.categoryList = response.data;
          console.log($scope.categoryList)
     })
    $http.get("../api/contacto").then(function(response){
         $scope.userList = response.data;
     })
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