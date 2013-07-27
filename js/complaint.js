$(document).ready(function() {
	$("#bSendComplaint").button().click(function(){
		$("#complaintMsg").text("Sending..");
		$.post("ajax/complaint/add.php", {comp: $("#complaintInp").val()}, function(data){
			$("#complaintMsg").html(data);
		});
	});
});

function complaintCtrl($scope, $http){
	$http.post("ajax/complaint/alltab.php").success(function(data){
		$scope.complaints = data;
	});
	$scope.order = "-time";
	$("#cbReload").click(function(){
		$http.post("ajax/complaint/alltab.php").success(function(data){
			$scope.complaints = data;
		});
	});
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