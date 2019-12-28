<?php

include "config/config.php";

$typeId = $_POST['depart'];   // department id

$query = $db->query("SELECT id, name FROM mark WHERE typeId=" . $typeId);
// $sql = "SELECT id, name FROM mark WHERE typeId=".$typeId;

// $result = mysqli_query($con,$sql);

$users_arr = array();

while( $row = $query->fetch(PDO::FETCH_ASSOC) ){
    $userid = $row['id'];
    $mark = $row['name'];

    $users_arr[] = array("id" => $userid, "mark" => $mark);
}
var_dump($users_arr);
// encoding array to json format
echo json_encode($users_arr);