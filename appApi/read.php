<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


$username = "epiz_31065689";
$password = "skHFVFf6PCFmpNz";
$database = new  PDO("mysql:host=sql105.epizy.com; dbname=epiz_31065689_MainDB;charset=latin1;", $username, $password);

$getData = $database->prepare("SELECT * FROM roozchat");
$getData->execute();
$getData = $getData->fetchAll(PDO::FETCH_ASSOC);
print_r(json_encode($getData));
?>