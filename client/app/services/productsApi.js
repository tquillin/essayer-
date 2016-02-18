console.log("productsApiFactory, ouai, il est là");

var api = angular.module('productsApiFactory', []);

api.factory('productsApi', ['$http', function($http){



  var baseUrl = 'http://localhost:8080/api/products/';

  // var baseUrlOne = 'http://localhost:8080/views/inventory/';


  var productsInterface = {};

  productsInterface.getAll = function(){
    return $http.get( baseUrl );
  };

// think databinding ... example <form ng-controller/ ng-model="newProduct.name/.description/.rating/.img"> </form>
  productsInterface.create = function( newProduct ){
    var payload = { product: newProduct};
    return $http.post( baseUrl, payload);
  };

  productsInterface.delete = function( id ){
    return $http.delete( baseUrl + id );
  };

  return productsInterface;

}]);

// $http
