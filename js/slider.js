angular.module('app', ['ngAnimate', 'ui.bootstrap']).
controller("CarouselDemoCtrl",function ($scope,$http) {
    
    $scope.myInterval = 2500;
	$scope.noWrapSlides = false;
    $scope.active = 0;
	$http.get("../properties/destacados.properties").then(function (response) {
		$scope.slides = response.data;
	}, function (response) {
		console.log("error");
	});
});
