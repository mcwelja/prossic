<?php

include "../config/config.php";

$arrayIndex = $_POST['arrayIndex'];

unset($_SESSION['products'][$arrayIndex]);

$total = 0;
foreach ($_SESSION['products'] as $product) {
    $priceProduct = rtrim($product['price'], '€');
    $quantityProduct = $product['quantity'];

    $total += $priceProduct * $quantityProduct;
}
$_SESSION['total'] = $total;

$response = [ 'currentTotal' => $_SESSION['total'] ];

echo json_encode($response);
