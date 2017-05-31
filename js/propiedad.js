var lat;
var long;
var href;

angular.module('propiedad',['ngAnimate','ui.bootstrap']).controller("resultadoPro",['$scope','$http', function ($scope, $http) {
	$scope.mipropiedad = [];
	$http.get("../properties/properties.properties").then(function (response) {
		$scope.mipropiedad = response.data;
		
		$scope.findProperty = function (id) {
			
			for (var i = 0; i < $scope.mipropiedad.length ; i++) {
				if($scope.mipropiedad[i].id == id ) {
					$scope.resultProperty = $scope.mipropiedad[i];
					lat = $scope.resultProperty.lat;
					$scope.slides = $scope.resultProperty.image;
					long = $scope.resultProperty.long;
					
					$scope.type = $scope.resultProperty.type === "A" ? "Arriendo" : "Venta";
					var url = $scope.getParameterByName('returnUrl');
					if (url === 'a') {
						$scope.redireccionar = "/view/arriendos.html";
					} else if (url === 'v') {
						$scope.redireccionar = "/view/ventas.html";
					} else if (url === 'd') {
						$scope.redireccionar = "/view/destacados.html";
					}
					break;
				}
			}
		};
	
		$scope.getParameterByName = function getParameterByName(name) {
			name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
			var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
			results = regex.exec(location.search);
			return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
		}

		var prodId = $scope.getParameterByName('idPropiedad');
		
		$scope.findProperty(prodId);
		initMap();
	}, function (response) {
				console.log("error");
	});
}]);


function initMap() {
	try {
			var myLatLng = {lat: lat, lng: long};

			var map = new google.maps.Map(document.getElementById('map'), {
				zoom: 15,
				center: myLatLng
			});

			var marker = new google.maps.Marker({
				position: myLatLng,
				map: map,
				title: 'Propiedad!'
			});
		
	}catch (error) {
		
	}
}; 
	
	
	
    
    




