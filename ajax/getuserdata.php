<?php
session_start();
$json = '';
$json = "{";
$who='';
if(isset($_POST['rollno'])){
	$who = $_POST['rollno'];
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
foreach ($arr as $i => $val) {
	$json .= '"'.$i.'": "'.$val.'", ';
}
$json = substr_replace($json, '', -2);
$json .= "}";
echo $json;
?>