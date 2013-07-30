angular.module('hostel',[]).config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/', {templateUrl: 'links/batches.html', controller: coursesCtrl}).
  when('/batch/:batchId', {templateUrl: 'links/batch-links.html', controller: linksCtrl}).
  otherwise({redirectTo: '/'});
}]);

function coursesCtrl($scope, $http){
	$http.get("links/data/links.json").success(function(data){
		$scope.linkGroups = data;
	});
}

function linksCtrl($scope, $http, $routeParams){
	$http.get("links/data/"+$routeParams.batchId+".json").success(function(data){
		$scope.linkGroups = data;
	});
}