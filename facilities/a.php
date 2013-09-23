<?php

function ReadFolderDirectory($dir,$listDir= array())
{
    $listDir = array();
    if($handler = opendir($dir))
    {
        while (($sub = readdir($handler)) !== FALSE)
        {
            if ($sub != "." && $sub != ".." && $sub != "Thumb.db")
            {
                if(is_file($dir."/".$sub))
                {
                    $listDir[] = $sub;
                }elseif(is_dir($dir."/".$sub))
                {
                    $listDir[$sub] = ReadFolderDirectory($dir."/".$sub); 
                } 
            } 
        }    
        closedir($handler); 
    } 
    return $listDir;    
}

// print_r(ReadFolderDirectory('images'));
$er = (ReadFolderDirectory('images'));

foreach ($er as $key => $value) {
	foreach ($value as $key => $value2) {
		echo '<img src=\'images/'.key($er).'/'.$value2.'\'></img><br>';
	}
	next($er);
	echo '<br>';
}
?>