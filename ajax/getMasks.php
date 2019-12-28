<?php

include "../config/config.php";

$modelId = $_POST['modelId']; //model id

$query = $db->query("SELECT id, name FROM mask WHERE modelId=" . $modelId);

$markArr = [];

while( $row = $query->fetch(PDO::FETCH_ASSOC) ){
    $maskId = $row['id'];
    $name = $row['name'];

    $markArr[] = array("id" => $maskId, "name" => $name);
}

// encoding array to json format
echo json_encode($markArr);