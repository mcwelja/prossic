<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

include '../config/config.php';
require_once "../vendor/autoload.php";

$response = '';
if (isset($_POST['cart'])) {
    $response .= '<table class="table table-striped">';
    $response .= '<thead>';
    $response .= '<tr>';
    $response .= '<th scope="col">#</th>';
    $response .= '<th scope="col">Mark</th>';
    $response .= '<th scope="col">Model</th>';
    $response .= '<th scope="col">Type</th>';
    $response .= '<th scope="col">Color</th>';
    $response .= '<th scope="col">Price</th>';
    $response .= '<th style="width: 7%" scope="col">Quantity</th>';
    $response .= '<th scope="col">Subtotal</th>';
    $response .= '<th scope="col"></th>';
    $response .= '</tr>';
    $response .= '</thead>';
    $response .= '<tbody>';
    foreach ($_SESSION['products'] as $key => $product) {
        $price = rtrim($product['price'], '€');
        $key = $key + 1;

        $response .= '<tr>';
        $response .= '<th scope="row">' . $key . '</th>';
        $response .= '<td>' . $product['mark'] . '</td>';
        $response .= '<td>' . $product['model'] . '</td>';
        $response .= '<td>' . $product['type'] . '</td>';
        if (array_key_exists('color', $product)) {
            $response .= '<td>' . $product['color'] . '</td>';
        } else {
            $response .= '<td>' . '' . '</td>';
        }
        $response .= '<td>' . $price . '&euro;</td>';
        $response .= '<td>';
        $response .= $product['quantity'];
        $response .= '</td>';
        $response .= '<td id="subtotal-' . $key . '">' . $price * $product['quantity'] . '&euro;</td>';
        $response .= '</tr>';
    }
    $response .= '</tbody>';
    $response .= '</table>';
    $response .= '<tfoot>';
    $response .= '<tr>';
    $response .= '<td colspan="2" class="hidden-xs text-center"><strong id="total-price">Total ' . $_SESSION['total'] . '&euro;</strong></td>';
    $response .= '</tr>';
    $response .= '</tfoot>';
    $response .= '</table>';
}

// Load Composer's autoloader
// require '../vendor/autoload.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer();

//Server settings
// $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
$mail->isSMTP();                                            // Send using SMTP
$mail->Host = 'smtp.gmail.com';                             // Set the SMTP server to send through
$mail->SMTPAuth = true;                                     // Enable SMTP authentication
$mail->Username = 'mcwelja@gmail.com';                      // SMTP username
$mail->Password = 'MladenVeljkovic1990';                    // SMTP password
// $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
$mail->SMTPSecure = "tls";
$mail->Port = 587;                                          // TCP port to connect to

//From email address and name
$mail->From = $_POST['email'];
$mail->FromName = $_POST['name'];

//To address and name
$mail->addAddress("mcwelja@hotmail.com");

//Address to which recipient will reply
$mail->addReplyTo($_POST['email'], "Reply");

//Send HTML or Plain Text email
$mail->isHTML(true);

$mail->Subject = "Kontakt forma sa sajta";

if (isset($_POST['cart'])) {
    $mail->Body = $response;
} else {
    $mail->Body = $_POST['textarea'];
}

session_destroy();

if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    ?>

    <script type="text/javascript">window.location.href = "../index.php";</script>

    <?php
//    echo "Message has been sent successfully";
}
