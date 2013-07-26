<?php
	session_start();
	if(isset($_SESSION['rollno'])){
		unset($_SESSION['rollno']);
	}
	if(isset($_SESSION['id'])){
		unset($_SESSION['id']);
	}
?>
<script type="text/javascript">window.open("index.php", "_self")</script>