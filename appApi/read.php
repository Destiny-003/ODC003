<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$servername = "mysql-72222-0.cloudclusters.net";
$username = "admin";
$password = "FCCvSEXg";
$dbname   = "destinyc";
$dbServerPort = "11084";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname, $dbServerPort,);


// Check connection
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
} 
echo "Connected successfully";

$getData = $database->prepare("SELECT * FROM roozchat");
$getData->execute();
$getData = $getData->fetchAll(PDO::FETCH_ASSOC);
print_r(json_encode($getData));
?>