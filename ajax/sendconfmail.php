<?php
	session_start();
	$email = $_SESSION['rollno'];
	include('../connect.inc.php');
	$hosteldb = new PDO("mysql:host=$MySQLhost;dbname=$MySQLdbname;charset=utf8", 
				$MySQLuser, 
				$MySQLpass);
	$random_hash = md5(uniqid(rand(), true));
	$hosteldb->query("UPDATE `users` SET `confkey`='".$random_hash."' WHERE `rollno`='".$email."';");

	$to      = $email.'@iiti.ac.in';
	$subject = "Hostel website registration";
	$message = "Welcome to the hostel website!\r\nYou, or someone using your email address, has completed registration at http://www.hostel.iiti.com . You can complete registration by clicking the following link:\r\n http://www.hostel.iiti.com/verify.php?key=".$random_hash."\r\n If this is an error, ignore this email and you will be removed from our mailing list.\r\nRegards,\r\n Hostel Website Team.";

	$headers = 'From: noreply@hostel.iiti.com' . "\r\n" .
	    'Reply-To: noreply@hostel.iiti.com' . "\r\n" .
	    'X-Mailer: PHP/' . phpversion();

	if(mail($to, $subject, $message, $headers))
		echo '<script>alert("Confirmation mail sent to '.$email.'@iiti.ac.in.");</script>';
	else
		echo 'Server busy. Please try again later.';
?>