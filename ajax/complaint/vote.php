<?php
session_start();

if(isset($_POST['complaintid'])&&isset($_POST['vote'])){
	include 'voteHelper.php';
	vote($_POST['vote'], $_POST['complaintid'], $_SESSION['id']);
	echo 1;
} else {
	echo 0;
}

session_write_close();
?>