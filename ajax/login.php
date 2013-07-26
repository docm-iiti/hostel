<?php

	$email = $_POST['email'];
	$pass = $_POST['pass'];

	if($email == '' || $pass == ''){
		echo "Enter all details";
	} else {
		include('../connect.inc.php');
		$hosteldb = new PDO("mysql:host=$MySQLhost;dbname=$MySQLdbname;charset=utf8", 
					$MySQLuser, 
					$MySQLpass);

		session_start();
		$query = $hosteldb->prepare("SELECT id, pass FROM users WHERE rollno=?;");
		$query->execute(array($email));
		$fetch = $query->fetch(PDO::FETCH_ASSOC);
		if(!($query->rowCount())){
			$query = $hosteldb->prepare("INSERT INTO users (rollno, pass) VALUES (?, ?);");
			$query->execute(array($email, $pass));
			$_SESSION['rollno'] = $email;
			$_SESSION['id'] = $hosteldb->lastInsertId();
			include 'sendconfmail.php';
			echo 'Welcome!<script>location.reload()</script>';
		} else {
			$check = ($pass == $fetch['pass']);
			if($check){
				$_SESSION['rollno'] = $email;
				$_SESSION['id'] = $fetch['id'];
				echo 'Welcome!<script>location.reload()</script>';
			} else {
				echo 'Email/Password wrong.';
			}
			
		}
	}
?>