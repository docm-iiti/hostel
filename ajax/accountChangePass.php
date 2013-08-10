<?php
	$oldPass = $_POST['oldPass'];
	$newPass = $_POST['newPass'];
	$newPassConf = $_POST['newPassConf'];

	session_start();
	$rollno = $_SESSION['rollno'];

	include('../connect.inc.php');
	$hosteldb = new PDO("mysql:host=$MySQLhost;dbname=$MySQLdbname;charset=utf8", 
				$MySQLuser, 
				$MySQLpass);
	if ($oldPass != ''){

		$attempt = $hosteldb->query("SELECT pass FROM users WHERE rollno='".$rollno."';");
		$fetch = $attempt->fetch(PDO::FETCH_ASSOC);
		$stored_hash = $fetch['pass'];
		$checkOldPass = ($oldPass == $stored_hash);

		if($checkOldPass){
			if($newPass == $newPassConf){
				if($hosteldb->exec("UPDATE users SET pass='".$newPass."' WHERE rollno='".$rollno."';"))
					echo 'Password changed successfully!';
				} else {
					echo 'Passwords don\'t match';
				}
		} else {
			echo 'Old password incorrect.';
		}

	} else {
		echo 'Enter old password.';
	}
?>