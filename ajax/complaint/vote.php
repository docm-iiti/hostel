<?php
session_start();

function vote($vote, $compid){
	//connect to database
	include('../../connect.inc.php');
	$hosteldb = new PDO("mysql:host=$MySQLhost;dbname=$MySQLdbname;charset=utf8", 
				$MySQLuser, 
				$MySQLpass);

	//check if already voted
	$query = $hosteldb->prepare("SELECT vote FROM complaint_votes WHERE complaintID=? AND userID=?;");
	$query->execute(array($compid, $_SESSION['id']));
	$voted = $query->rowCount();

	if ($voted){
		$voteval = $query->fetch(PDO::FETCH_ASSOC)['vote'];

		if($vote != $voteval){
			$query = $hosteldb->prepare("UPDATE complaint_votes SET vote=? WHERE complaintID=? AND userID=?;");
			$query->execute(array($vote, $compid, $_SESSION['id']));
			$query = $hosteldb->prepare("UPDATE complaints SET votes=votes+$vote-$voteval WHERE id=?;");
			$query->execute(array($compid));
			return 1;
		} else {
			return 0;
		}
	} else {
		$query = $hosteldb->prepare("INSERT INTO complaint_votes (complaintID, userID, vote) VALUES (?, ?, ?);");
		$query->execute(array($compid, $_SESSION['id'], $vote));
		$query = $hosteldb->prepare("UPDATE complaints SET votes=votes+1 WHERE id=?;");
		$query->execute(array($compid));
		return 1;
	}
}

$data = json_decode(file_get_contents("php://input"));
echo vote($data->vote, $data->complaintid, $_SESSION['id']);

session_write_close();
?>