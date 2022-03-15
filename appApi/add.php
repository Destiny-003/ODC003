<?php 
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    if(isset($_POST['msg']) && ($_POST['user']) ){
    $username = "epiz_31065689";
    $password = "skHFVFf6PCFmpNz";
    $database = new  PDO("mysql:host=sql105.epizy.com; dbname=epiz_31065689_MainDB;charset=latin1;", $username, $password);

        $addData = $database->prepare("INSERT INTO roozchat(messages,user) VALUES(:msg,:user)");

        $addData->bindParam("msg",$_POST['msg']);
        $addData->bindParam("user",$_POST['user']);
        
        $addData->execute(); 
        print_r(json_encode(array("message"=>"تم اضافة البيانات بنجاح")));
    }
?>