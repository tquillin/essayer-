console.log('oui, le main controller est ici...');

var ctlr = angular.module('mainController', []);

ctlr.controller('main', ['$scope', 'productsApi', function($scope, productsApi){

  $scope.products = {};

  $scope.products = productsApi.getAll();

  $scope.masterProduct = angular.copy( $scope.newProduct );


  $scope.updateProducts = function(){
    productsApi.getAll().then(function(response){
      $scope.products = response.data.products;
    });
  };

  $scope.create = function(){
    productsApi.create( $scope.newProduct ).then(function(){
      $scope.updateProducts();
    });
  };

  $scope.delete = function(id){
      productsApi.delete( id ).then(function(){
        $scope.updateProducts();
      });
  };

  function init(){
    $scope.updateProducts();
  }

  init();

}]);
