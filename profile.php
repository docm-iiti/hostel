<!DOCTYPE html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>Hostel | IIT Indore</title>
  <link rel="stylesheet" href="css/pagelayout.css" />
  <link rel="stylesheet" href="css/studentscorner.css" />
  <link rel="stylesheet" href="css/profile.css" />
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
	$edit = false;
	if(isset($_GET['rollno']) && $_GET['rollno']!=$_SESSION['rollno']){
		//------- other profile
		$who = $_GET['rollno'];
	} else {
		// --- user profile
		$who = $_SESSION['rollno'];
		$edit = true;
	}
		?> 
		<div id="profile">
			<div id="profileHeader">
				<?php 
				if ($edit){
					echo '<input type="button" value="Edit Profile" id="editProfile" ></input>';
					echo '<h2>Your Profile</h2>';
				} else {
					echo '<h2>'.$who."'s Profile</h2>";
				} ?>
			</div>
			<div id="profDataDiv">
			<table id="profData">
				
			</table>
			</div>
		</div>
		<?php
		echo "<script>var who = '$who';</script>";
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
  <script type="text/javascript" src="js/profile.js" ></script>
  <script type="text/javascript" src="js/studentscorner.js" ></script>
  <script src="js/header_login.js"></script>
</body>
</html>