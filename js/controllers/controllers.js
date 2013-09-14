function homeCtrl($scope, $http, $routeParams){
	$http.get("home/marquee.json").success(function(data){
		$scope.images = data;
	});
}

function facilitiesCtrl($scope, $http, $routeParams){
	$http.get("facilities/facilities.json")
	.success(function(data){
		$scope.facilities = data;
	});
	$scope.topic = $routeParams.topic;
}

function lifeCtrl($scope, $http, $routeParams){
	$http.get("life/life.json")
	.success(function(data){
		$scope.facilities = data;
	});
	$scope.topic = $routeParams.topic;
}

function peopleCtrl($scope, $http){
	$http.get("people/people.json").success(function(data){
		$scope.wardens = data;
	});
	$http.get("people/sgm.json").success(function(data){
		$scope.sgms = data;
	});
	$http.get("people/admins.json").success(function(data){
		$scope.admins = data;
	});
	$http.get("people/staff.json").success(function(data){
		$scope.staff = data;
	});
}