function linksCtrl($scope, $http){
	$http.post("links.json").success(function(data){
		$scope.linkGroups = data;
	});
	$("#cbReload").click(function(){
		$http.post("links.json").success(function(data){
			$scope.linkGroups = data;
		});
	});
}