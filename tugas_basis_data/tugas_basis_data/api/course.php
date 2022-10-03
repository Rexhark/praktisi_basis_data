<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "tugas_basis_data";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$course = [];

$sql = "SELECT * FROM course";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    array_push($course, $row);
  }
}
$courseJson = json_encode($course);
print_r($courseJson);

$conn->close();
?>