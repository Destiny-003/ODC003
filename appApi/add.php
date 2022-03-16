<?php 
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    if(isset($_POST['msg']) && ($_POST['user']) ){
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
        $addData = $database->prepare("INSERT INTO roozchat(messages,user) VALUES(:msg,:user)");

        $addData->bindParam("msg",$_POST['msg']);
        $addData->bindParam("user",$_POST['user']);
        
        $addData->execute(); 
        print_r(json_encode(array("message"=>"تم اضافة البيانات بنجاح")));
    }
?>


