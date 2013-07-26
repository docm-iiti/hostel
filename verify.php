<!DOCTYPE html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>Hostel | IIT Indore</title>
  <link rel="stylesheet" href="css/pagelayout.css" />
  <link rel="stylesheet" href="css/login.css" />
</head>

<body background="images/background.jpg">
  <div class="myDiv">
    <div class="fixedHeader">
      <a href="index.php"><img src="images/logo.jpg" style="height:50px;float:left;padding:0 10px 0 10px;"><p style="float:left;margin:0px;padding:12px 4px;color:#FFF;font-size:18px">Hostel</p></a>
      <a href="http://webmail.iiti.ac.in"><p style="color:#FFF;float:right;margin:0px;padding:12px 4px 0 10px;font-size:18px">Login to Webmail</p></a>
      <a href="https://www.facebook.com/pages/iit-indore/130703073519"><img id="fblogo" style="float:right;padding:10px 4px; " height="27px" src="images/Logos/fb_logo.svg" alt="Like" /></a>
      <a href="https://plus.google.com/+iitindore"><img id="gpluslogo" style="float:right;padding:10px 4px;" height="27px" src="images/Logos/gplus_logo.svg" alt="+1" /></a>
      <a href="http://www.youtube.com"><img id="youtubelogo" style="float:right;padding:10px 4px; " height="27px" alt="Videos" src="images/Logos/youtube_logo.svg"/></a>
    </div>
    <div class="content">
      <!--/*********** Content ***************/-->

      <?php
        $key = $_GET['key'];
        include 'connect.inc.php';

          $query = mysql_query("SELECT `rollno` FROM `users` WHERE `confkey` = '".$key."';");

          $fetch = mysql_fetch_assoc($query);
          $check = mysql_num_rows($query);
          if($check){
              session_start();
              $_SESSION['rollno'] = $fetch['rollno'];
              mysql_query("UPDATE `users` SET `confkey` = '1' WHERE `confkey` = '".$key."';");
            ?>
              Congrats! Your email has been confirmed <br>
            <?php
          } else {
            ?> Invalid confirmation. <?php
          }
      ?>
              <a href="index.php">Click here to continue</a>

    <div class="footer">
      
      <div class="footer_overlay_content">
          <div class="footer_quicklinks">
              <h2>QUICK LINKS</h2>
            
            
            </div>
        
        
        </div>
     
     </div>
    </div>
  </div>
  <script type="text/javascript" src="js/vendor/jquery-1.10.1.min.js" ></script>
  <script type="text/javascript" src="js/index.js" ></script>
</body>
</html>