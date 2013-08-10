<?php
if (isset($_SESSION['rollno'])){
	include 'connect.inc.php';
  $hosteldb = new PDO("mysql:host=$MySQLhost;dbname=$MySQLdbname;charset=utf8", 
        $MySQLuser, 
        $MySQLpass);
	$edit = false;
	if(isset($_GET['comp'])){
		//------- other profile
		$which = $_GET['comp'];
	} else {
		// --- user profile
		$which = $_SESSION['comp'];
		$edit = true;
	}
		?> 
		<div id="complaintComments">
			<div id="ccHeader">
      <h2>Complaint #<?=$which?></h2>
			</div>
			<div id="ccDataDiv">
      <div id="ccData">
			<?php
        $query = $hosteldb->prepare("SELECT complaint, votes FROM complaints WHERE id=?");
        $query->execute(array($which));
        $tcomp = $query->fetch(PDO::FETCH_ASSOC);
        echo "<h1>".$tcomp['complaint']."</h1>";
      ?>
      <h3>Voters [<?=$tcomp['votes']?>]</h3>
        <?php
        $query = $hosteldb->prepare("SELECT com.userID, users.name, users.rollno
          FROM complaint_votes as com 
          LEFT JOIN users
            ON com.userID = users.id
          WHERE com.complaintID=?");
        $query->execute(array($which));
        while ($row = $query->fetch(PDO::FETCH_ASSOC, PDO::FETCH_ORI_NEXT)) {
          echo "<a href='profile.php?rollno=";
          echo $row['rollno'];
          echo "'/>";
          if($row['name']!='')
            echo $row['name'];
          else
            echo $row['rollno'];
          echo "</a>";
          echo "<br>";
        }
        ?>
      <h3>Comments</h3>
      <ul>
        <?php
        $query = $hosteldb->prepare("SELECT com.comment, com.opID, com.time, users.name, users.rollno
          FROM complaint_comments as com 
          LEFT JOIN users
            ON com.opID = users.id
          WHERE com.complaintID=?");
        $query->execute(array($which));
        while ($row = $query->fetch(PDO::FETCH_ASSOC, PDO::FETCH_ORI_NEXT)) {
          echo "<li>";
          echo $row['comment'];
          echo "<br>by <a href='profile.php?rollno=";
          echo $row['rollno'];
          echo "'/>";
          if($row['name']!='')
            echo $row['name'];
          else
            echo $row['rollno'];
          echo "</a> at ";
          echo $row['time'];
          echo "</li>";
        }
        ?>
      </ul>
      <input id="tComment" type="text">
      <input id="bComment" type="button" value="Comment">
      </div>
			</div>
		</div>
		<?php
		echo "<script>var which = '$which';</script>";
} else {
?>
<script type="text/javascript">window.open("index.php", "_self")</script>
<?php 
	}
?>
      </div>