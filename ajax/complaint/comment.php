<?php
	include '../../connect.inc.php';
	session_start();
	$hosteldb = new PDO("mysql:host=$MySQLhost;dbname=$MySQLdbname;charset=utf8", 
        $MySQLuser, 
        $MySQLpass);
	$que = $hosteldb->prepare("INSERT INTO complaint_comments(comment, opID, complaintID) VALUES (?, ?, ?);");
	$que->execute(array($_POST['comment'],$_SESSION['id'],$_POST['compid']));
?>