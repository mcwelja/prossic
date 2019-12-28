<?php

include "../config/config.php";

$maskId = $_POST['maskId'];  //mask id

$query = $db->query("SELECT id, name, price FROM color WHERE maskId=" . $maskId);

$colorArr = [];

while( $row = $query->fetch(PDO::FETCH_ASSOC) ){
    $colorId = $row['id'];
    $name = $row['name'];
    $price = $row['price'];

    $colorArr[] = array("id" => $colorId, "name" => $name, "price" => $price);
}

// encoding array to json format
echo json_encode($colorArr);