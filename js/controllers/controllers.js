function profileCtrl($scope, $http, $routeParams){
	
}

function peopleCtrl($scope, $http){
	$http.get("people/people.json").success(function(data){
		$scope.wardens = data;
	});
	$http.get("people/sgm.json").success(function(data){
		$scope.sgms = data;
	});
	$scope.admins = [
		{"name":"Person A"},
		{"name":"Person A"},
		{"name":"Person A"},
		{"name":"Person A"},
		{"name":"Person A"},
		{"name":"Person A"},
		{"name":"Person A"},
		{"name":"Person A"}
	];
	$scope.staff = [
		{"name":"Staff aaa"},
		{"name":"Staff aaa"},
		{"name":"Staff aaa"},
		{"name":"Staff aaa"},
		{"name":"Staff aaa"},
		{"name":"Staff aaa"},
		{"name":"Staff aaa"},
		{"name":"Staff aaa"}
	];
}

function facilitiesCtrl($scope, $http){
	$http.get("facilities/facilities.json")
	.success(function(data){
		$scope.facilities = data;
	});
}

function lifeCtrl($scope, $http){
	$http.get("life/life.json")
	.success(function(data){
		$scope.facilities = data;
	});
}