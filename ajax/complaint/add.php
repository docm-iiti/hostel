<?php
include('../../connect.inc.php');
$hosteldb = new PDO("mysql:host=$MySQLhost;dbname=$MySQLdbname;charset=utf8", 
			$MySQLuser, 
			$MySQLpass);
session_start();
$comp = $_POST['comp'];
$ins = $hosteldb->prepare('INSERT INTO complaints (complaint, op_id, votes) VALUES (?, ?, ?)');
$ins->execute(array($comp, $_SESSION['id'], 0));
echo "Saved.";
?>