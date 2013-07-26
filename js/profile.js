$(document).ready(function(){
	updateProfData(who);
	$("input[type=button]").button();
});

var editing = 0;
$("#editProfile").click(function(){
	$("#profDataDiv").css('text-indent', '0');
    $('#profDataDiv').animate({  textIndent: 90 }, {
        step: function(go) {
          $(this).css('-moz-transform','rotateY('+go+'deg)');
          $(this).css('-webkit-transform','rotateY('+go+'deg)');
          $(this).css('-ms-transform','rotateY('+go+'deg)');
          $(this).css('transform','rotateY('+go+'deg)');
        },
        duration: 1000,
        complete: function(){
        	if(editing){
	        	$("#editProfile").attr("value","Edit Profile");
	        	updateProfData();
	        } else {
	        	$("#editProfile").attr("value","Done Editing");
				$("#profData").html('\
					<tr>\
						<td>Name:</td>\
						<td><img style="height:25px;" src="images/loading.gif"></img></td>\
					</tr>\
					<tr>\
						<td>College ID:</td>\
						<td><img style="height:25px;" src="images/loading.gif"></img></td>\
					</tr>\
					<tr>\
						<td>Branch:</td>\
						<td><img style="height:25px;" src="images/loading.gif"></img></td>\
					</tr>\
					<tr><td colspan="2"><h3>Change password</h3></td></tr>\
					<tr><td>Old Password:</td><td><input type="password" id="oldPass" /></td></tr>\
					<tr><td>New Password:</td><td><input type="password" id="newPass" /></td></tr>\
					<tr><td>Confirm Password:</td><td><input type="password" id="newPassConf" /></td></tr>\
					<tr><td colspan="2"><input type="button" id="bChangePass" value="Change Password"></input></td></tr>\
					<tr><td colspan="2"><div id="passChangeMsg"></td></tr>');
				$("input[type=button]").button();
				$.post('ajax/getuserdata.php', {rollno: who}, function(data) {
				  $("#profData").html('\
					<tr>\
						<td>Name:</td>\
						<td><input id="editName" value="'+data.name+'"></input><div style="display:inline;" id="editNameMsg"></div></td>\
					</tr>\
					<tr>\
						<td>College ID:</td>\
						<td>'+data.rollno+'@iiti.ac.in</td>\
					</tr>\
					<tr>\
						<td>Branch:</td>\
						<td><input id="editBranch" value="'+data.branch+'"></input><div style="display:inline;" id="editBranchMsg"></div></td>\
					</tr>\
					<tr><td colspan="2"><h3>Change password</h3></td></tr>\
					<tr><td>Old Password:</td><td><input type="password" id="oldPass" /></td></tr>\
					<tr><td>New Password:</td><td><input type="password" id="newPass" /></td></tr>\
						<tr><td>Confirm Password:</td><td><input type="password" id="newPassConf" /></td></tr>\
						<tr><td colspan="2"><input type="button" id="bChangePass" value="Change Password"></input></td></tr>\
						<tr><td colspan="2"><div id="passChangeMsg"></td></tr>');
					$("input[type=button]").button();

					//updating user data
						// name
						$("#editName").keyup(function(){
							$("#editNameMsg").html("<img style='height:25px;' src='images/loading.gif'></img>");
							$.post('ajax/update.php', {name: $(this).val()})
								.done(function(){$("#editNameMsg").html("Saved.");})
								.fail(function(){$("#editNameMsg").html("Server error.");});
						});
						// branch
						$("#editBranch").keyup(function(){
							$("#editBranchMsg").html("<img style='height:25px;' src='images/loading.gif'></img>");
							$.post('ajax/update.php', {branch: $(this).val()})
								.done(function(){$("#editBranchMsg").html("Saved.");})
								.fail(function(){$("#editBranchMsg").html("Server error.");});
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
				}, "json");
	        }
	        editing = !editing;
			$("#profDataDiv").css('text-indent', '90px');
        }
    }).animate({  textIndent: 0 }, {
        step: function(go) {
          $(this).css('-moz-transform','rotateY('+go+'deg)');
          $(this).css('-webkit-transform','rotateY('+go+'deg)');
          $(this).css('-ms-transform','rotateY('+go+'deg)');
          $(this).css('transform','rotateY('+go+'deg)');
        },
        duration: 1000
    });
});

function updateProfData(who){
	$("#profData").html('\
		<tr>\
			<td>Name:</td>\
			<td><img style="height:25px;" src="images/loading.gif"></img></td>\
		</tr>\
		<tr>\
			<td>College ID:</td>\
			<td><img style="height:25px;" src="images/loading.gif"></img></td>\
		</tr>\
		<tr>\
			<td>Branch:</td>\
			<td><img style="height:25px;" src="images/loading.gif"></img></td>\
		</tr>');
	$("input[type=button]").button();
	$.post('ajax/getuserdata.php', {rollno: who}, function(data) {
	  $("#profData").html('\
		<tr>\
			<td>Name:</td>\
			<td>'+data.name+'</td>\
		</tr>\
		<tr>\
			<td>College ID:</td>\
			<td>'+data.rollno+'@iiti.ac.in</td>\
		</tr>\
		<tr>\
			<td>Branch:</td>\
			<td>'+data.branch+'</td>\
		</tr>');
		$("input[type=button]").button();
	}, "json");
}