$(document).ready(function() {
	// $("#bSendComplaint").button().click(function(){
	// 	$("#complaintMsg").text("Sending..");
	// 	$.post("ajax/meme/add.php", {comp: $("#complaintInp").val()}, function(data){
	// 		$("#complaintMsg").html(data);
	// 	});
	// });
});

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