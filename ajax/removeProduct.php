<?php

include "../config/config.php";

$arrayIndex = $_POST['arrayIndex'];

unset($_SESSION['products'][$arrayIndex]);

echo json_encode(true);
