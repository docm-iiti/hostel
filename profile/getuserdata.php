<?php
session_start();
$who='';
$data = (file_get_contents("php://input"));
if($data!="{}"){
	$data = json_decode($data);
	$who = $data->rollno;
} else {
	if(isset($_SESSION['rollno'])){
		$who = $_SESSION['rollno'];
	}
}
include('../connect.inc.php');
$hosteldb = new PDO("mysql:host=$MySQLhost;dbname=$MySQLdbname;charset=utf8", 
			$MySQLuser, 
			$MySQLpass);
$query = $hosteldb->query("SELECT rollno, name, branch FROM users WHERE rollno='$who'");
$arr = $query->fetch(PDO::FETCH_ASSOC);
echo json_encode($arr);
?>