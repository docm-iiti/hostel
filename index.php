<!DOCTYPE html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>Hostel | IIT Indore</title>
  <link rel="stylesheet" href="css/pagelayout.css" />
  <link rel="stylesheet" href="css/studentscorner.css" />
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
      <!--/*********** Content ***************/-->

    <div id="stdcnr">
  <?php
    if(isset($_SESSION['rollno'])){

      //Logged in---------------

      include 'connect.inc.php';
		$hosteldb = new PDO("mysql:host=$MySQLhost;dbname=$MySQLdbname;charset=utf8", 
					$MySQLuser, 
					$MySQLpass);
      $query = $hosteldb->prepare("SELECT confkey FROM users WHERE rollno=?;");
      $query->execute(array($_SESSION["rollno"]));

      $fetch = $query->fetch(PDO::FETCH_ASSOC);
      if($fetch['confkey'] == 1){
        // Verified ID ----------------------------
        ?>
          <div id="sidebar">
            <div id="sidebarmenu">
              M <br> E <br> N <br> U
            </div>
            <ul>
              <a href="index.php"><li>Home</li></a>
              <a href="profile.php"><li>Profile</li></a>
              <a href="complaint.php"><li>Complaint box</li></a>
              <a href="links.php"><li>Links</li></a>
              <a href="logout.php"><li>Logout</li></a>
            </ul>
          </div>
          <div id="stdcnrcont">
            
          </div>
        <?php
      } else {
        //Not Verified ----------------------------
        ?>
        <center>
          <div style="padding: 50px; border: #222 2px solid;">Confirm your email to continue. <br>
           <a href="" id="sendConfLink" onclick="return false;">If you didn't get the mail within 5 mins of registration, Click here to send it again.</a>
           <div id="sendConfMsg"></div>
         </div>
        <input type="button" value="Logout" onclick="window.open('logout.php','_self');"></center>
        <?php
      }
  } else {
      // Not logged in-----------------
  ?>
      <div id='login'>
        <center>
        <h1>Login:</h1>
        <form id='loginform' onsubmit="return false;">
          <table cellpadding="10px">
            <tr>
              <td>
                College E-mail ID:
              </td>
              <td>
                <input id="email" />@iiti.ac.in<br/>
              </td>
            </tr>
            <tr>
              <td>
                Password:
              </td>
              <td>
                <input type="password" id="pass" /><br/>
              </td>
            </tr>
              <td colspan="2">
                <center>
                <input type="submit" value="Log in!" /><br/>
                </center>
              </td>
            </tr>
          </table>
        </form>
        <div id="loginMsg"></div><br/>
        </center>
      </div>
  <?php  
    }; ?>

    </div>
  </div>

  <?php
    include "footer.html";
  ?>

  <script type="text/javascript" src="js/vendor/jquery-1.10.1.min.js" ></script>
  <script type="text/javascript" src="js/vendor/jquery-ui-1.9.2.custom.min.js" ></script>
  <script type="text/javascript" src="js/index.js" ></script>
  <script type="text/javascript" src="js/login.js" ></script>
  <script type="text/javascript" src="js/studentscorner.js" ></script>
  <script src="js/header_login.js"></script>
</body>
</html>