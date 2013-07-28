<!DOCTYPE html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>Hostel | IIT Indore</title>
  <link rel="stylesheet" href="css/pagelayout.css" />
  <link rel="stylesheet" href="css/studentscorner.css" />
  <link rel="stylesheet" href="css/complaintpage.css" />
  <link rel="stylesheet" href="css/header_login.css" />
  <link href="css/orangeHostelTheme/jquery-ui-1.9.2.custom.css" rel="stylesheet">
</head>

<body background="images/background.jpg">
  <?php 
    session_start();
    include 'header.php';
  ?>
  <div class="myDiv" style="height:790px">
    <div class="pageHeader_fill">
    <div class="pageHeader">
    <nav id="pageNav" role="navigation">
      <ul> 
        <li>
          <a href="index.html" class="heading">Home</a>
        </li>
        <li class="drop">
          <a href="people.html" class="heading">People</a>
          <div class="dropdownContain">
            <div class="dropOut">
              <div class="triangle"></div>
              <ul>
                <li><a href="warden.html" class="subheading">Wardens</a></li>
                
           <!-------------Add Students Menu Here------------------>
                
                <li><a href="adminstaff.html" class="subheading">Admin Staff</a></li>
              </ul>
            </div>
          </div>
        </li>           
      
        <li class="drop" ><a href="residences.html" class="heading">Facilities</a>
          <div class="dropdownContain">
            <div class="dropOut">
              <div class="triangle"></div>
              <ul>
                <li><a href="residences.html" class="subheading">Residences</a></li>
                <li><a href="hostel_office.html" class="subheading">Hostel Office</a></li>
                <li><a href="medical.html" class="subheading">Medical</a></li>
                <li><a href="transport.html" class="subheading">Transport</a></li>
                <li><a href="guest_house.html" class="subheading">Guest House</a></li>
                <li><a href="sport.html" class="subheading">Sports</a></li>
                <li><a href="internet.html" class="subheading">Internet</a></li>
                <li><a href="diningfaci.html" class="subheading">Dining</a></li>
                <li><a href="lafresco.html" class="subheading">La-Fresco</a></li>
              </ul>
            </div>
          </div>      
        </li>
      
        <li class="drop" ><a href="life.html" class="heading">Life</a>
          <div class="dropdownContain">
            <div class="dropOut">
              <div class="triangle"></div>
              <ul>
                <li>Events</li>
                <li>Festivals</li>
                <li>Trips</li>
                <li>Others</li>
              </ul>
            </div>
          </div>      
        </li>
      
        <li><a href="gallery.html" class="heading">Gallery</a></li>
        <li class="current"><a href="http://hostel-iiti.vacau.com" class="heading">Student's Corner</a></li>
        <li><a href="contactus.html" class="heading">Contact Us</a></li>
    
      </ul> 
    </nav>
    </div>
    </div>
    <div id="stdcnr">
  	  <?php
        include 'sidebar.html';
        ?>
	    <div id="stdcnrcont">
        
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
		<div id="profile">
			<div id="profileHeader">
      <h2>Complaint #<?=$which?></h2>
			</div>
			<div id="profDataDiv">
      <div id="profData">
			<?php
        $query = $hosteldb->prepare("SELECT complaint FROM complaints WHERE id=?");
        $query->execute(array($which));
        $tcomp = $query->fetch(PDO::FETCH_ASSOC);
        echo $tcomp['complaint'];
      ?>
      <h3>Voted by</h3>
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
          echo ", ";
        }
        ?>
      <br>
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
      <input id="tComment">
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
    </div>
    </div>

    <?php
    include "footer.html";
  ?>

  <script type="text/javascript" src="js/vendor/jquery-1.10.1.min.js" ></script>
  <script type="text/javascript" src="js/vendor/jquery-ui-1.9.2.custom.min.js" ></script>
  <script type="text/javascript" src="js/index.js" ></script>
  <script type="text/javascript" src="js/complaintpage.js" ></script>
  <script type="text/javascript" src="js/studentscorner.js" ></script>
  <script src="js/header_login.js"></script>
</body>
</html>