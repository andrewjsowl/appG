// module Controller which has many controllers
var allControllers = angular.module('allControllers',[]);

allControllers.controller("defaultCtrl", function ($scope) {
    $scope.show = false;
    $scope.showingFun = function(){
        $scope.show =!$scope.show;
    };
});