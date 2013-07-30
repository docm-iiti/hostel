<link rel="stylesheet" href="css/header_login.css" />
<div class="fixedHeader">
  <a href="index.php">
  <img src="images/logo.jpg" style="height:50px;float:left;padding:0 10px 0 10px;"><p style="float:left;margin:0px;padding:12px 4px;color:#FFF;font-size:18px">Hostel</p></a>
<?php
if(isset($_SESSION['rollno'])){
    ?>
    <a href="logout.php"><div id="logout" style="">Log Out</div></a>
    <?php
} else {
    ?>
    <div class="login_container">
    <div class="flat-form">
        <ul class="tabs">
            <li>
                <a href="#login" class="active">Login</a>
            </li>
            
        </ul>
            <div id="login" class="form-action show">
                <h2>Login to Your Basket</h2>
                <p>
                    Enter your Credentials.
                </p>
                <form id="form">
                    <ul>
                        <li>
                            <input type="text" placeholder="Username" />
                        </li>
                        <li>
                            <input type="password" placeholder="Password" />
                        </li>
                        <li>
                            <input type="submit" value="Login" class="button" />
                        </li>
                    </ul>
                </form>
            </div>
            <!--/#login.form-action-->
            
        </div>
    </div>
<?php
}
?>
</div>