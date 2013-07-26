<?php
session_start();
include('../connect.inc.php');
$hosteldb = new PDO("mysql:host=$MySQLhost;dbname=$MySQLdbname;charset=utf8", 
			$MySQLuser, 
			$MySQLpass,
			array(
			    PDO::ATTR_PERSISTENT => true
			));
if(isset($_POST['name'])){
	$hosteldb->exec("UPDATE users SET name = '".$_POST['name']."' WHERE rollno='".$_SESSION['rollno']."';");
}
if(isset($_POST['branch'])){
	$hosteldb->exec("UPDATE users SET branch = '".$_POST['branch']."' WHERE rollno='".$_SESSION['rollno']."';");
}
?>