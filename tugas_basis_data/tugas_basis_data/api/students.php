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
$students = [];

$sql = "SELECT * FROM students";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    array_push($students, $row);
  }
}
$studentsJson = json_encode($students);
print_r($studentsJson);

$conn->close();
?>