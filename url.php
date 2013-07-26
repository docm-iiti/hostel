<?php
    //url routing
    $request = str_replace("/Others/hostel/", "", $_SERVER['REQUEST_URI']); 

    $params = explode("/", $request);
	$safe_pages = array("index", "profile", "thread");

	if(in_array($params[0], $safe_pages)) {
		switch($params[0]){
			case 'profile':
				if(count($params)>1){
					header("Location: profile.php?rollno=".$params[1]);
					exit();
				} else{
					header("Location: profile.php");
					exit();
				}
				break;
			default:
				include($params[0].".php");
				break;
		}
	} else {
	    include("404.html");
	}
?>