console.log("Se inicio el JS")
var app = angular.module('agenda', ['ngCookies']);

app.controller("userController", ["$scope","$http",'$cookies' , function($scope, $http, $cookies){

     //Cargar datos en tablas
    function getData(){   
     $http.get("../api/categoria/ID/"+$cookies.get('UDI')).then(function(response){
          $scope.categoryList = response.data;
     })
     $http.get("../api/contacto/ID/"+$cookies.get('UDI')).then(function(response){
         $scope.userList = response.data;
     })
    }

    //Cargar datos en Gestions
    $scope.setCont = function(cont){
         $scope.ContID =cont.idContacto;
         $scope.nombreUS = cont.nombre
         $scope.apellidoUS = cont.apellido
         $scope.telefonoUS = cont.telefono
         $scope.correoUS = cont.correo
         $scope.categoriaUS = {idCategoria: cont.idCategoria, nombre: cont.nombreCategoria}
    }   

    //Operaciones de gestion
    $scope.gestionUS=function(OperaID){
        var data = {
            idUsuario: $cookies.get("UDI"),
            idContacto: $scope.ContID,
            nombre: $scope.nombreUS,
            apellido: $scope.apellidoUS,
            telefono: $scope.telefonoUS,
            correo: $scope.correoUS,
            idCategoria: $scope.categoriaUS.idCategoria
        }
       switch (OperaID) {
           case 1:
               $http({
                    method: 'post',
                    url: '../api/contacto',
                    data: data,
                    headers: {"Content-Type":"application/json"}
                }).then(function(response){
                    console.log(response)
                        if(response.data.Mensaje == true){
                            
                            $("#closeAGUSMO").click();
                        }else{
                            $scope.error="Error en el API para Contactos"
                        }
                })
               break;
           case 2:
               $http({
                    method: 'put',
                    url: '../api/contacto/'+data.idContacto,
                    data: data,
                    headers: {"Content-Type":"application/json"}
                }).then(function(response){
                    console.log(response)
                        if(response.data.Mensaje == true){
                            $("#closeAGUSMO").click();
                        }else{
                            $scope.error="Error en el API para Contactos"
                        }
                })
               break;
            case 3:
               $http({
                    method: 'delete',
                    url: '../api/contacto',
                    data: data,
                    headers: {"Content-Type":"application/json"}
                }).then(function(response){
                    console.log(response)
                        if(response.data.Mensaje == true){
                            
                            $("#closeAGUSMO").click();
                        }else{
                            $scope.error="Error en el API para Contactos"
                        }
                })
               break;
       }
       getData()
    }
    getData() 
           
}]);

app.controller("autenticarUS",['$scope','$http','$cookies', function($scope,$http,$cookies){

     $scope.autenticar = function(){
         console.log($scope.nickAUTH)
         console.log($http)
         var data = {
             nick: $scope.nickAUTH,
             contrasena: $scope.passAUTH
         }

         $http({
           method: 'post',
           url: '../api/usuario/autenticar',
           data: data,
           headers: {"Content-Type":"application/json"}
        }).then(function(response){
            if(response.data.auth == true){
                $scope.showErrorAGMO = false;
                $cookies.put("UDI", response.data.data.idUsuario);
                $cookies.put("UNI", response.data.data.nick);
                window.location = response.data.location
            }else{
                $scope.showErrorAGMO = true;
                $scope.errorAGMO=response.data.Mensaje;
            }
           })
     }
}]);

app.controller("categoryController", ["$scope","$http","$cookies", function($scope,$http,$cookies){
    $http.get("../api/categoria/ID/"+$cookies.get('UDI')).then(function(response){
          $scope.categoryList = response.data;
     })
     $scope.setCate = function(CATE){
         $scope.cateID = CATE.idCategoria;
         $scope.nombreCA = CATE.nombre;
         $scope.idCA = CATE.idUsuario;
     }
     //Operaciones de gestion
    $scope.gestionCA=function(OperaID){
        var data = {
           idCategoria: $scope.cateID,
           nombre: $scope.nombreCA,
           idUsuario: $cookies.get("UDI")
        }
        var url = "../../api/categoria/"
        var method = "post"
        console.log(data)
       switch (OperaID) {
           case 2:
              method= 'put'
              url = url+data.idCategoria
            break;
            case 3:
            method= 'delete'
               break;
       }
        $http({
            method: method,
            url: url ,
            data: data,
            headers: {"Content-Type":"application/json"}
            }).then(function(response){
            if(response.data.Mensaje == true){          
              $("#closeAGUSMO").click();
            }else{
              $scope.error="Error en el API para Contactos"
            }
        })
      $http.get("../api/categoria/ID/"+$cookies.get('UDI')).then(function(response){
          $scope.categoryList = response.data;
     })
    }

}]);

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}