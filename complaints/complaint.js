$(document).ready(function() {
	$("#bSendComplaint").click(function(){
		$("#complaintMsg").text("Sending..");
		$.post("ajax/complaint/add.php", {comp: $("#complaintInp").val()}, function(data){
			$("#complaintMsg").html(data);
			$("#complaintInp").val("");
		});
	});
});