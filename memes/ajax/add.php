<?php
if(isset($_FILES['userupload'])){
	include '../../connect.inc.php';
	$hosteldb = new PDO("mysql:host=$MySQLhost;dbname=$MySQLdbname;charset=utf8", 
				$MySQLuser, 
				$MySQLpass);
	if(move_uploaded_file($_FILES['userupload']['tmp_name'], 'images/memes/'.$_FILES['userupload']['name'])){
		echo 'Uploaded successfully.';
	} else {
		echo 'Server error, try again later.';
	}
}
?>