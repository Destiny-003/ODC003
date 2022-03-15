<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


    $username = "sql11479227";
    $password = "QWBWkbTlBC";
    $database = new  PDO("mysql:host=sql11.freemysqlhosting.net; dbname=sql11479227;charset=latin1;", $username, $password);

$getData = $database->prepare("SELECT * FROM roozchat");
$getData->execute();
$getData = $getData->fetchAll(PDO::FETCH_ASSOC);
print_r(json_encode($getData));
?>
