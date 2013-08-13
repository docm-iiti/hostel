$(document).ready(function(){
	//FB, Twitter, gplus logos mouse hover events
	$("#fblogo").mouseenter(function(){$(this).attr('src','images/Logos/fb_logo2.png').animate(1000);});
	$("#fblogo").mouseleave(function(){$(this).attr('src','images/Logos/fb_logo.png').animate(1000);});
	$("#gpluslogo").mouseenter(function(){$(this).attr('src','images/Logos/gplus_logo2.png').animate(1000);});
	$("#gpluslogo").mouseleave(function(){$(this).attr('src','images/Logos/gplus_logo.png').animate(1000);});
	$("#youtubelogo").mouseenter(function(){$(this).attr('src','images/Logos/youtube_logo2.png').animate(1000);});
	$("#youtubelogo").mouseleave(function(){$(this).attr('src','images/Logos/youtube_logo.png').animate(1000);});
});

angular.module('hostel',[]).config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/profile', {templateUrl: 'profile/profile.html', controller: profileCtrl}).
  when('/profile/edit', {templateUrl: 'profile/edit.html', controller: profileCtrl}).
  when('/profile/:userID', {templateUrl: 'profile/profile.html', controller: profileCtrl}).
  when('/complaints', {templateUrl: 'complaints/complaints.html', controller: complaintCtrl}).
  when('/complaints/add', {templateUrl: 'complaints/add.html', controller: complaintCtrl}).
  when('/complaints/info', {templateUrl: 'complaints/info.html', controller: complaintCtrl}).
  when('/memes', {templateUrl: 'memes/memes.html', controller: memeCtrl}).
  when('/memes/add', {templateUrl: 'memes/add.php', controller: memeCtrl}).
  when('/links', {templateUrl: 'links/batches.html', controller: coursesCtrl}).
  when('/links/:courseID', {templateUrl: 'links/batch-links.html', controller: linksCtrl}).
  otherwise({redirectTo: '/profile'});
}]);

function profileCtrl($scope, $http, $routeParams){
	$http.post('profile/getuserdata.php', {rollno: $routeParams.userID}).success(function(data) {
		$scope.data = data;
	});
	//updating user data
		// name
		$("#editData").click(function(){
			$("#editDataMsg").html("<img style='height:25px;' src='images/loading.gif'></img>");
			$.post('ajax/update.php', {name: $("#editName").val(), branch: $("#editBranch").val()})
				.done(function(){$("#editDataMsg").html("Saved.");})
				.fail(function(){$("#editDataMsg").html("Server error.");});
		});
	// update password
	$('#bChangePass').click(function(){
		$('#passChangeMsg').html("<img style='width:20px;height:20px;' src='images/loading.gif'></img>");
		$.post('ajax/accountChangePass.php', {oldPass: $('#oldPass').val(),
				newPass: $('#newPass').val(), newPassConf: $('#newPassConf').val()}, function(data){
			$('#passChangeMsg').text(data);
			$('#oldPass').val('');
			$('#newPass').val('');
			$('#newPassConf').val('');
		});
	});
}

function complaintCtrl($scope, $http){
	$http.post("ajax/complaint/alltab.php").success(function(data){
		$scope.complaints = data;
	});
	$scope.order = "-time";
	$scope.vote = function(c){
		var id = c.complaintid;
		if(c.voted == "1"){
			$http.post("ajax/complaint/vote.php", {complaintid: c.complaintid, vote: 0}).success(function(data){
				if(data == "1"){ //unvoted
					c.votes--;
				} else { //alredy unvoted
					alert("It looks like you already unvoted on this complaint.");
				}
				c.voted = 0;
			});
		}else{
			$http.post("ajax/complaint/vote.php", {complaintid: c.complaintid, vote: 1}).success(function(data){
				if(data == "1"){ //voted
					c.votes++;
				} else { //already voted
					alert("It looks like you already voted on this complaint.");
				}
				c.voted = 1;
			});
		}
	}
}


function coursesCtrl($scope, $http){
	$http.get("links/data/links.json").success(function(data){
		$scope.linkGroups = data;
	});
}

function linksCtrl($scope, $http, $routeParams){
	$http.get("links/data/"+$routeParams.courseID+".json").success(function(data){
		$scope.linkGroups = data;
	});
}


function memeCtrl($scope, $http){
	$http.post("ajax/meme/allmemes.php").success(function(data){
		$scope.memes = data;
	});
	$scope.order = "-time";
	$("#memeReload").click(function(){
		$http.post("ajax/meme/allmemes.php").success(function(data){
			$scope.memes = data;
		});
	});
	// $scope.vote = function(c){
	// 	var id = c.complaintid;
	// 	if(c.voted == "1"){
	// 		$http.post("ajax/meme/vote.php", {complaintid: c.complaintid, vote: 0}).success(function(data){
	// 			if(data == "1"){ //unvoted
	// 				c.votes--;
	// 			} else { //alredy unvoted
	// 				alert("It looks like you already unvoted on this complaint.");
	// 			}
	// 			c.voted = 0;
	// 		});
	// 	}else{
	// 		$http.post("ajax/meme/vote.php", {complaintid: c.complaintid, vote: 1}).success(function(data){
	// 			if(data == "1"){ //voted
	// 				c.votes++;
	// 			} else { //already voted
	// 				alert("It looks like you already voted on this complaint.");
	// 			}
	// 			c.voted = 1;
	// 		});
	// 	}
	// }
}