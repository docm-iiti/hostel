<link rel="stylesheet" href="memes/css/memes.css" />
<div ng-controller="memeCtrl" ng-app>
  <div id="memeContr">
    Search: <input ng-model="query">
    Order by: <select ng-model="order">
      <option value="-time" selected>New</option>
      <option value="-votes">Top</option>
    </select>
    <a href="#/memes/add"><input type="button" value="Add" id="memeAdd"></a>
  </div>
  <form id="memeupload" method='POST' action='#/memes/add' enctype="multipart/form-data">
    <h2>Upload your meme: </h2>
    <input type="file" name="userupload"><br>
    <input type="submit"><a href="#/memes"><input type="button" value="Go Back"></a>
  <?php
if(isset($_FILES['userupload'])){
  echo 'asd';
  include '../../connect.inc.php';
  $hosteldb = new PDO("mysql:host=$MySQLhost;dbname=$MySQLdbname;charset=utf8", 
        $MySQLuser, 
        $MySQLpass);
  if(move_uploaded_file($_FILES['userupload']['tmp_name'], 'images/memes/'.$_FILES['userupload']['name'])){
    echo '<br>Uploaded successfully.';
  } else {
    echo '<br>Server error, try again later.';
  }
}
?>
  </form>
</div>
<script type="text/javascript" src='memes/js/add.js'></script>