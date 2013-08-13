<form action="#" method="POST" enctype="multipart/form-data">
	<input type="file" name="userfile"><br>
	<input type="submit" name="submit">
</form>

<?php
echo "Hee";
if(isset($_POST['submit'])){
	if(move_uploaded_file($_FILES['userfile']['tmp_name'], 'images/'.$_FILES['userfile']['name']))
		echo "Uploaded.";
}
?>