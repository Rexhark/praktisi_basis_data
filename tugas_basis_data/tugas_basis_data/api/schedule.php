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
$jadwal = [];

$sql = "SELECT id,full_name,nama,tanggal,jam FROM jadwal LEFT join students ON jadwal.students_id = students.students_id;";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    array_push($jadwal, $row);
  }
}
$jadwalJson = json_encode($jadwal);
print_r($jadwalJson);

$conn->close();
?>