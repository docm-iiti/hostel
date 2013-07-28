<?php
session_start();
include('../../connect.inc.php');
$hosteldb = new PDO("mysql:host=$MySQLhost;dbname=$MySQLdbname;charset=utf8", 
			$MySQLuser, 
			$MySQLpass);
$query = "SELECT 
			memes.id as memeid, memes.src, memes.votes, users.name, users.rollno, memes.time 
		FROM memes 
		LEFT JOIN users 
			ON memes.opID = users.id";
$stmt = $hosteldb->prepare($query, array(PDO::ATTR_CURSOR => PDO::CURSOR_SCROLL));
$stmt->execute();
$dquery = $hosteldb->prepare("SELECT voteID FROM meme_votes WHERE memeID=? AND userID='".$_SESSION['id']."';");

$response = array();
try {
	while ($row = $stmt->fetch(PDO::FETCH_ASSOC, PDO::FETCH_ORI_NEXT)) {
		$memeid = $row['memeid'];

		$dquery->execute(array($memeid));
		$row['voted'] = $dquery->rowCount();

		array_push($response, $row);
	}
	$stmt = null;
	$dquery = null;
}
catch (PDOException $e) {
	print $e->getMessage();
}
echo json_encode($response);
session_write_close();
?>