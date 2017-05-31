angular.module('ventasModule',['ngAnimate','ui.bootstrap']).controller("ventas",function ($scope, $http) {

    $scope.alertMessage = "No hay propiedades en Arriendo por el momento";
	
	$http.get("../properties/properties.properties").then(function (response) {
		$scope.mipropiedad = response.data;
		
		const isDestacado ="true";
		$scope.listVentas = [];
		const CONS_ARRIENDO ="V";
		
		$scope.listFinal  = function () {
			for (x = 0; x < $scope.mipropiedad.length ; x ++ ) {
				var propiedadArriendo = $scope.mipropiedad[x];

				if (CONS_ARRIENDO == propiedadArriendo.type) {		
					$scope.listVentas.push($scope.mipropiedad[x]);
				} 
			}
		};
		$scope.listFinal();

		$scope.filteredTodos = [];
		$scope.currentPage = 1;
		$scope.numPerPage = 10;
		$scope.totalItems = $scope.listVentas.length;
		$scope.entryLimit = 3; 
		$scope.noOfPages = Math.ceil($scope.totalItems / $scope.numPerPage);
		$scope.setPage = function (pageNo) {
			$scope.currentPage = pageNo;
		};


		$scope.$watch('currentPage + numPerPage', function() {
			var begin = (($scope.currentPage - 1) * $scope.numPerPage)
			, end = begin + $scope.numPerPage;

			$scope.filteredTodos = $scope.listVentas.slice(begin, end);
		});

		$scope.pageChanged = function() {
			console.log('Page changed to: ' + $scope.currentPage);
		};
		
	}, function (response) {
				console.log("error");
	});
	
	

});



