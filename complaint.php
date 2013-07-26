<!DOCTYPE html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>Hostel | IIT Indore</title>
  <link rel="stylesheet" href="css/pagelayout.css" />
  <link rel="stylesheet" href="css/studentscorner.css" />
  <link rel="stylesheet" href="css/complaint.css" />
  <link href="css/orangeHostelTheme/jquery-ui-1.9.2.custom.css" rel="stylesheet">
</head>

<body background="images/background.jpg">
  <?php 
    session_start();
  ?>
  <div class="fixedHeader">
    <a href="index.php"><img src="images/logo.jpg" style="height:50px;float:left;padding:0 10px 0 10px;"><p style="float:left;margin:0px;padding:12px 4px;color:#FFF;font-size:18px">Hostel</p></a>
    <a href="http://www.youtube.com"><p style="color:#FFF;float:right;margin:0px;padding:12px 4px 0 10px;font-size:18px">Sign In </p></a>
  </div>
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
            
        
<?php
if (isset($_SESSION['rollno'])){
  include 'connect.inc.php';
  $edit = false;
  if(isset($_GET['rollno'])){
    //------- other profile
    $who = $_GET['rollno'];
  } else {
    // --- user profile
    $who = $_SESSION['rollno'];
    $edit = true;
  }
    ?> 
      <div id="complaintbox">
        <div id="cbHeader">
          Complaint Box
        </div>
        <div id="cbCont" ng-controller="complaintCtrl" ng-app>
          <div id="cbContr">
            Search: <input ng-model="query">
            Order by: <select ng-model="order">
              <option value="time" selected>New</option>
              <option value="votes">Top</option>
            </select>
          </div>
          <div id="cbComplaints">

            <div class="cbpost" ng-repeat="c in complaints | filter:query | orderBy:order">
              <div complaintid="{{c.complaintid}}" voted="{{c.voted}}" class="cbplus ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only" role="button" aria-disabled="false" title="">
                <span class="ui-button-icon-primary ui-icon ui-icon-plusthick"></span>
                <span class="ui-button-text"></span>
              </div>
              <div class="cbvotes">{{c.votes}}
              </div>
              <div class="cbnotvotes">
                <div class="cbcomp">
                  <a href="complaintPage.php?comp={{c.complaintid}}">#{{c.complaintid}} {{c.complaint}}</a>
                </div>
                <div class="cbinfo">submitted by <a href="profile.php?rollno={{c.rollno}}">{{c.name}}</a> at {{c.time}}
                </div>
              </div>
            </div>

          </div>
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
  <script type="text/javascript" src="js/vendor/angular.min.js" ></script>
  <script type="text/javascript" src="js/index.js" ></script>
  <script type="text/javascript" src="js/studentscorner.js" ></script>
  <script type="text/javascript" src="js/complaint.js" ></script>
  <script type="text/javascript" src="js/complaintCtrl.js" ></script>
</body>
</html>