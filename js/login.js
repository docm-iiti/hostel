$(document).ready(function(){
	//Login
	$('#loginform').submit(function(){
		$('#loginMsg').html("<img style='width:20px;height:20px;' src='images/loading.gif'></img>");
		$.post('ajax/login.php', {email: $('#email').val(), pass: $('#pass').val()}, function(data){
			$('#loginMsg').html(data);
		});
	});

	$("input[type=submit]").button();
});

$("#sendConfLink").click(function (){
	$("#sendConfMsg").html("<img style='width:20px;height:20px;' src='images/loading.gif'></img>");
	$.post("ajax/sendconfmail.php", {} ,function(data){
       	$("#sendConfMsg").html(data);
    });
    $(this).remove();
});