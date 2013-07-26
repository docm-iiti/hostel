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
	$scope.order = "time";
}

/*	$(plusdiv).click(function(){
		var btn = $(this);
		if(btn.attr("voted") == "1"){
			$.post("ajax/complaint/vote.php", {complaintid: btn.attr("complaintid"), vote: 0}, function(data){
				if(data == "1"){ //unvoted
					btn.button("option", "icons", {primary: "ui-icon-plusthick"});
					btn.next().html((+btn.next().html())-1);
				} else { //alredy unvoted
					alert("It looks like you already unvoted on this complaint.");
				}
				btn.attr("voted", 0);
			});
		}else{
			$.post("ajax/complaint/vote.php", {complaintid: btn.attr("complaintid"), vote: 1}, function(data){
				if(data == "1"){ //voted
					btn.button("option", "icons", {primary: "ui-icon-minusthick"});
					btn.next().html((+btn.next().html())+1);
				} else { //already voted
					alert("It looks like you already voted on this complaint.");
				}
				btn.attr("voted", 1);
			});
		}
	});
*/