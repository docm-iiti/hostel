<html>
<head>
	<title>Test page</title>
</head>
<body>
	
	<?php
	include('../connect.inc.php');
	$hosteldb = new PDO("mysql:host=$MySQLhost;dbname=$MySQLdbname;charset=utf8", 
				$MySQLuser, 
				$MySQLpass);

	$query = $hosteldb->query("SELECT * FROM users WHERE rollno='ee1200206'");
    $row = $query->fetch(PDO::FETCH_ASSOC);
    echo $row['name'].'<br/>';
    echo count($row).'<br/>';
    while(list($a,$b) = each($row)){
    	echo "$a => $b <br/>";
    }
    
	include 'userDBHelper.php';

	$bkc = new User('ee');
	$bkc->setBranch('Chaitanya');
	echo $bkc->getName();
	?>
  <script type="text/javascript" src="js/vendor/jquery-1.10.1.min.js" ></script>
  <script type="text/javascript" src="js/vendor/jquery-1.10.1.min.js" ></script>
</body>
</html>