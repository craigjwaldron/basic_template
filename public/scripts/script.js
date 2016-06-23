console.log("hello from script.js");

var myApp = angular.module( "myApp", [] );
myApp.controller( "testController", [ "$scope", function( $scope ){
  $scope.getTestInput = function(){
  // console.log( "Hello: " + $scope.testBinder );
  };
}]);
