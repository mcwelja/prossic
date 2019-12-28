<?php

include "../config/config.php";

$products = [];

if (!empty($_POST['main']) && !empty($_POST['mainPrice'])) {
    $products[] = [
        'mark' => $_POST['markText'],
        'model' => $_POST['modelText'],
        'type' => $_POST['main'],
        'quantity' => 1,
        'price' => $_POST['mainPrice']
    ];
}
if (!empty($_POST['sidePattern']) && !empty($_POST['sidePrice'])) {
    $products[] = [
        'mark' => $_POST['markText'],
        'model' => $_POST['modelText'],
        'type' => 'Side',
        'color' => $_POST['sideColor'],
        'pattern' => $_POST['sidePattern'],
        'quantity' => 1,
        'price' => $_POST['sidePrice']
    ];
}
if (!empty($_POST['display']) && !empty($_POST['displayPrice'])) {
    $products[] = [
        'mark' => $_POST['markText'],
        'model' => $_POST['modelText'],
        'type' => $_POST['display'],
        'quantity' => 1,
        'price' => $_POST['displayPrice']
    ];
}
if (!empty($_POST['keysHalfPattern']) && !empty($_POST['keysHalfPrice'])) {
    $products[] = [
        'mark' => $_POST['markText'],
        'model' => $_POST['modelText'],
        'type' => 'Keys-half',
        'color' => $_POST['keysHalfColor'],
        'pattern' => $_POST['keysHalfPattern'],
        'quantity' => 1,
        'price' => $_POST['keysHalfPrice']
    ];
}
if (!empty($_POST['keysWholePattern']) && !empty($_POST['keysWholePrice'])) {
    $products[] = [
        'mark' => $_POST['markText'],
        'model' => $_POST['modelText'],
        'type' => 'Keys-whole',
        'color' => $_POST['keysWholeColor'],
        'pattern' => $_POST['keysWholePattern'],
        'quantity' => 1,
        'price' => $_POST['keysWholePrice']
    ];
}

if (isset($_SESSION['products'])) {
    $_SESSION['products'] = array_merge($_SESSION['products'], $products);
} else {
    $_SESSION['products'] = $products;
}

$total = 0;
foreach ($products as $key => $product) {
    $total +=  rtrim($product['price'], '€');
}

$_SESSION['total'] = $total;

return json_encode($total);
//
//echo "<pre>";
//var_dump($products);
//echo "</pre>";
//
//echo '<br>';
//
//echo "<pre>";
//var_dump($_SESSION);;
//echo "</pre>";
//die;
