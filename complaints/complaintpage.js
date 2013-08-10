$(document).ready(function(){
	$("#bComment").click(function(){
		$.post("ajax/complaint/comment.php",{comment:$("#tComment").val(), compid: which},function(data){
			$("#profData ul").append("<li>"+$("#tComment").val()+"<br>by <a href='profile.php'>you</a> just now.</li>");
			$("#tComment").val("");
		});
	});
});