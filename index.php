<!DOCTYPE html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>Hostel | IIT Indore</title>
  <link rel="stylesheet" href="css/pagelayout.css" />
  <link rel="stylesheet" href="css/studentscorner.css" />
  <link rel="stylesheet" href="css/header_login.css" />
</head>
<body background="images/background.jpg">
  <?php 
    session_start();
    include 'header.php';
  ?>
  <div class="myDiv">
    <div class="pageHeader_fill">
      <div class="pageHeader">
          <nav id="pageNav" role="navigation">
              <ul>
                  <li>
                      <a href="index.html#!/home" class="heading">Home</a>
                  </li>
                  <li class="drop">
                      <a href="index.html#!/people" class="heading">People</a>
                      <div class="dropdownContain">
                          <div class="dropOut">
                              <div class="triangle"></div>
                              <ul>
                                  <li>
                                      <a href="index.html#!/people#warden" class="subheading">Wardens</a>
                                  </li>
                                  <li>
                                      <a href="index.html#!/people#sgm" class="subheading">Gymkhana</a>
                                  </li>
                                  <li>
                                      <a href="index.html#!/people#hstaff" class="subheading">Hostel Staff</a>
                                  </li>
                                  <li>
                                      <a href="index.html#!/people#astaff" class="subheading">Admin Staff</a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </li>
                  <li>
                      <a href="index.html#!/facilities" class="heading">Facilities</a>
                  </li>
                  <li class="drop">
                      <a href="index.html#!/life" class="heading">Life</a>
                      <div class="dropdownContain">
                          <div class="dropOut">
                              <div class="triangle"></div>
                              <ul>
                                  <li>
                                      <a href="index.html#!/life#events" class="subheading">Events</a>
                                  </li>
                                  <li>
                                      <a href="index.html#!/life#festival" class="subheading">Festivals</a>
                                  </li>
                                  <li>
                                      <a href="index.html#!/life#trips" class="subheading">Trips</a>
                                  </li>
                                  <li>
                                      <a href="index.html#!/life#others" class="subheading">Others</a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </li>
                  <li>
                      <a href="index.html#!/gallery" class="heading">Gallery</a>
                  </li>
                  <li>
                      <a href="/" class="heading">Student's Corner</a>
                  </li>
                  <li>
                      <a href="index.html#!/contactus" class="heading">Contact Us</a>
                  </li>
              </ul>
          </nav>
      </div><!--For class pageHeader-->
  </div>
    <div id="stdcnr">
      <?php
        include 'sidebar.html';
        ?>
      <div id="stdcnrcont">
<?php
  if (isset($_SESSION['rollno'])){
    include 'connect.inc.php';
      $user = $_SESSION['rollno'];
      $edit = true;
      ?> 
      <div ng-app="hostel">
        <div ng-view></div>
      </div>
      <?php
      echo "<script>var user = '$user';</script>";
  } else {
?>
<script type="text/javascript">window.open("login.php", "_self")</script>
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
  <script type="text/javascript" src="js/controllers/index.js" ></script>
  <script type="text/javascript" src="js/controllers/route.js" ></script>
  <script src="js/header_login.js"></script>
</body>
</html>