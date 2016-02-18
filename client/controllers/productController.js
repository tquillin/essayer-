console.log('oui, le main controller est ici...');

var ctlr = angular.module('mainController', []);

ctlr.controller('mainController', ['$scope', 'productsApi', function($scope, productsApi){

  $scope.products = {};

  $scope.products = getAll();

  $scope.updateProducts = function(){
    productsApi.getAll().then(function(response){
      $scope.response = response.data.products;
    });
  };

  $scope.create = function(){
    productsApi.create( $scope.newProduct).then(function(){
      $scope.updateProducts();
    });
  };



}]);
