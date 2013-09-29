function homeCtrl($scope, $http, $routeParams, $timeout){
	$scope.imgs = "";
	$scope.img = "";
	var i = 0;
	$http.get("home/marquee.json").success(function(data){
		$scope.imgs = data;
	});
	$scope.events = [{'title':'Loading..'}];
	$http.get("https://spreadsheets.google.com/feeds/list/0ArgpUuZnCjpddFdTUFI2NXlid0FlN0RiV3ZZam50Tmc/od6/public/basic?alt=json").success(function(data){
		$scope.b4events = data.feed.entry;
		$scope.events = [];
		var temp, item, k;
		for (var i = 0; i < $scope.b4events.length; i++) {
			temp = $scope.b4events[i].content.$t;
			item = {};
			item.title = temp.substring(7,temp.indexOf("url: ")-2);
			item.url = temp.substring(temp.indexOf("url: ")+5);
			$scope.events.push(item);
		};
	});
    setInterval(function(){
        $scope.$apply(function() {
        	$scope.img = $scope.imgs[(i++)%10];
        });
    }, 2000);
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