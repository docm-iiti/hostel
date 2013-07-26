<?php
class User {
  private $id;
  private $rollno;
  private $pass;
  private $name;
  private $branch;
  private static $db;

  public function __construct($roll) {
  	include('../connect.inc.php');
	$hosteldb = new PDO("mysql:host=$MySQLhost;dbname=$MySQLdbname;charset=utf8", 
				$MySQLuser, 
				$MySQLpass);
    self::$db = $hosteldb;
  	$query = self::$db->query("SELECT * FROM users WHERE rollno = '$roll';");
  	$data = $query->fetch(PDO::FETCH_ASSOC);
    $this->id = $data['id'];
    $this->rollno = $roll;
    $this->pass = $data['pass'];
    $this->name = $data['name'];
    $this->branch = $data['branch'];
  }

  public function getId() {
    return $this->id;
  }

  public function getRollNo() {
    return $this->rollno;
  }

  public function getPass() {
    return $this->rollno;
  }

  public function getName() {
    return $this->name;
  }

  public function getBranch() {
    return $this->branch;
  }

  public function getAll(){
    $arr = array();
    array_push($arr['id'], $id);
    array_push($arr['rollno'], $rollno);
    array_push($arr['pass'], $pass);
    array_push($arr['name'], $name);
    array_push($arr['branch'], $branch);
    return $arr;
  }

  public function setId($s) {
    $stmt = self::$db->prepare("UPDATE users SET id=:id WHERE rollno=:roll");
    $stmt->execute(array('id' => $s, 'roll'=>($this->rollno)));
  }

  public function setRollNo($s) {
    $stmt = self::$db->prepare("UPDATE users SET rollno=:rollno WHERE rollno=:roll");
    $stmt->execute(array('rollno' => $s, 'roll'=>($this->rollno)));
  }

  public function setPass($s) {
    $stmt = self::$db->prepare("UPDATE users SET pass=:pass WHERE rollno=:roll");
    $stmt->execute(array('pass' => $s, 'roll'=>($this->rollno)));
  }

  public function setName($s) {
    $stmt = self::$db->prepare("UPDATE users SET name=:name WHERE rollno=:roll");
    $stmt->execute(array('name' => $s, 'roll'=>($this->rollno)));
  }

  public function setBranch($s) {
    $stmt = self::$db->prepare("UPDATE users SET branch=:branch WHERE rollno=:roll");
    $stmt->execute(array('branch' => $s, 'roll'=>($this->rollno)));
  }
}
?>