angular.module('arriendoModule',['ngAnimate','ui.bootstrap']).controller("propiedades",function ($scope, $http) {
	
	const CONS_ARRIENDO ="A";
	$scope.listArriendo = [];
    $scope.alertMessage = "No hay propiedades en Arriendo por el momento";
	
	$http.get("../properties/properties.properties").then(function (response) {
		$scope.mipropiedad = response.data;
		
		$scope.listFinal  = function () {
			for (x = 0; x < $scope.mipropiedad.length ; x ++ ) {
				var propiedadArriendo = $scope.mipropiedad[x];

				if (CONS_ARRIENDO == propiedadArriendo.type) {		
					$scope.listArriendo.push($scope.mipropiedad[x]);
				} 
			}
		};
		$scope.listFinal();

		$scope.filteredTodos = [];
		$scope.currentPage = 1;
		$scope.numPerPage = 10;
		$scope.totalItems = $scope.listArriendo.length;
		$scope.entryLimit = 3; 
		$scope.noOfPages = Math.ceil($scope.totalItems / $scope.numPerPage);
		  $scope.setPage = function (pageNo) {
			$scope.currentPage = pageNo;
		};

		console.log($scope.listArriendo);
		$scope.$watch('currentPage + numPerPage', function() {
			var begin = (($scope.currentPage - 1) * $scope.numPerPage)
			, end = begin + $scope.numPerPage;

			$scope.filteredTodos = $scope.listArriendo.slice(begin, end);
		});

		$scope.pageChanged = function() {
			console.log('Page changed to: ' + $scope.currentPage);
		};
	}, function (response) {
				console.log("error");
	});
	
	

});



