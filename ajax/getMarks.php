<?php

include "../config/config.php";

$typeId = $_POST['typeId'];   // type id

$query = $db->query("SELECT id, name FROM mark WHERE typeId=" . $typeId);

$typeArr = [];

while( $row = $query->fetch(PDO::FETCH_ASSOC) ){
    $markId = $row['id'];
    $name = $row['name'];

    $typeArr[] = array("id" => $markId, "name" => $name);
}

// encoding array to json format
echo json_encode($typeArr);