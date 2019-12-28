<?php

include "../config/config.php";

$quantity = $_POST['quantity'];
$arrayIndex = $_POST['arrayIndex'];

$_SESSION['products'][$arrayIndex]['quantity'] = $quantity;

$price = rtrim($_SESSION['products'][$arrayIndex]['price'], '€');
$subtotal = $price * $quantity;

$total = 0;
foreach ($_SESSION['products'] as $product) {
    $priceProduct = rtrim($product['price'], '€');
    $quantityProduct = $product['quantity'];

    $total += $priceProduct * $quantityProduct;
}
$_SESSION['total'] = $total;

$response = ['arrayIndex' => $arrayIndex, 'subtotal' => $subtotal, 'price' => $price, 'currentTotal' => $_SESSION['total']];

// encoding array to json format
echo json_encode($response);
