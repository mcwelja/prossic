<?php

include "../config/config.php";


$markId = $_POST['markId'];   // mark id
$typeId = $_POST['typeId'];   // type id

$query = $db->query("SELECT id, name FROM model WHERE typeId=" . $typeId . " AND markId=" . $markId);

$markArr = [];

while( $row = $query->fetch(PDO::FETCH_ASSOC) ){
    $modelId = $row['id'];
    $name = $row['name'];

    $markArr[] = array("id" => $modelId, "name" => $name);
}

// encoding array to json format
echo json_encode($markArr);