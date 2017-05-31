angular.module('propiedadesModule',['ngAnimate','ui.bootstrap']).controller("propiedades",function ($scope, $http) {

    $scope.alertMessage = "No hay propiedades en Arriendo por el momento";
	
	$http.get("../properties/properties.properties").then(function (response) {
		$scope.mipropiedad = response.data;
		
		const isDestacado ="true";
		$scope.listDestacados = [];

		$scope.list = function () {
			for (var x = 0; x < $scope.mipropiedad.length ; x ++ ) {
				var propiedadVenta = $scope.mipropiedad[x];
				if (isDestacado == propiedadVenta.isDestacada) {
					$scope.listDestacados.push($scope.mipropiedad[x]);
				}
			}
			console.log($scope.listDestacados);
		};
		$scope.list();

		$scope.filteredTodos = [];
		$scope.currentPage = 1;
		$scope.numPerPage = 10;
		$scope.totalItems = $scope.listDestacados.length;
		$scope.entryLimit = 3; 
		$scope.noOfPages = Math.ceil($scope.totalItems / $scope.numPerPage);
		$scope.setPage = function (pageNo) {
			$scope.currentPage = pageNo;
		};


		$scope.$watch('currentPage + numPerPage', function() {
			var begin = (($scope.currentPage - 1) * $scope.numPerPage)
			, end = begin + $scope.numPerPage;

			$scope.filteredTodos = $scope.listDestacados.slice(begin, end);
		});

		$scope.pageChanged = function() {
			console.log('Page changed to: ' + $scope.currentPage);
		};
		
	}, function (response) {
		console.log("error");
	});
	
	

});



