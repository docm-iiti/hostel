<?php
session_start();
include('../../connect.inc.php');
$hosteldb = new PDO("mysql:host=$MySQLhost;dbname=$MySQLdbname;charset=utf8", 
			$MySQLuser, 
			$MySQLpass);
$query = "SELECT 
			complaints.id as complaintid, complaints.complaint, complaints.votes, users.name, users.rollno, complaints.time 
		FROM complaints 
		LEFT JOIN users 
			ON complaints.op_id = users.id";
$stmt = $hosteldb->prepare($query, array(PDO::ATTR_CURSOR => PDO::CURSOR_SCROLL));
$stmt->execute();
$dquery = $hosteldb->prepare("SELECT voteID FROM complaint_votes WHERE complaintID=? AND userID='".$_SESSION['id']."';");
$commentsQuery = $hosteldb->prepare("SELECT id FROM complaint_comments WHERE complaintID=?;");

$response = array();
try {
	while ($row = $stmt->fetch(PDO::FETCH_ASSOC, PDO::FETCH_ORI_NEXT)) {
		$compid = $row['complaintid'];

		$dquery->execute(array($compid));
		$commentsQuery->execute(array($compid));
		$row['voted'] = $dquery->rowCount();
		$row['comments'] = $commentsQuery->rowCount();

		array_push($response, $row);
	}
	$stmt = null;
	$dquery = null;
	$commentsQuery = null;
}
catch (PDOException $e) {
	print $e->getMessage();
}
echo json_encode($response);
session_write_close();
?>