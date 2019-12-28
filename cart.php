<?php

include 'config/config.php';

?>
<!DOCTYPE html>
<html lang="en">
<head>
	<title>Prossic</title>
	<link rel="stylesheet" type="text/css" href="css/normalize.css">
	<link rel="stylesheet" type="text/css" href="css/grid.css"> 
	<link rel="stylesheet" type="text/css" href="css/style.css">
	
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
	<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
</head>
<body>

	<nav class="navbar navbar-light" style="background-color: black;">
		<div class="container" id="nav">
			<div class="row">				
				<div class="col-1-sm mobile-hide">

				</div>

				<div class="col-3-sm">
					<img src="img/logo.svg" alt="">
				</div>

				<div class="col-7-sm" id="navigation">
					<ul class="white-content">
						<li class="mobile-hide"><a href="index.php">Home</a></li>
						<li class="mobile-hide"><a href="gallery.html">Gallery</a></li>
						<li class="mobile-hide"><a href="video.html">Video</a></li>
					</ul>
				</div>

			</div>
		</div>
	</nav>

	<div class="container">
		<table class="table table-striped">
			<thead>
				<tr>
				  <th scope="col">#</th>
				  <th scope="col">Mark</th>
				  <th scope="col">Model</th>
				  <th scope="col">Type</th>
				  <th scope="col">Color</th>
				  <th scope="col">Price</th>
				  <th style="width: 10%" scope="col">Quantity</th>
				  <th scope="col">Subtotal</th>
				  <th scope="col"></th>
				</tr>
				</thead>
				<tbody>
                <?php
//                echo '<pre>';
//                var_dump($_SESSION);
//                echo '</pre>';
                if (isset($_SESSION['products'])) {
                    foreach ($_SESSION['products'] as $key => $product) {
                        $price = rtrim($product['price'], '€');
                        $key = $key + 1;

                        echo '<tr>';
                        echo '<th scope="row">' . $key . '</th>';
                        echo '<td>' . $product['mark'] . '</td>';
                        echo '<td>' . $product['model'] . '</td>';
                        echo '<td>' . $product['type'] . '</td>';
                        if (array_key_exists('color', $product)) {
                            echo '<td>' . $product['color'] . '</td>';
                        } else {
                            echo '<td>' . '' . '</td>';
                        }
                        echo '<td>' . $product['price'] . '</td>';
                        echo '<td>';
                        echo '<input id="update-product-' . $key . '" type="number" min="1" class="form-control text-center" value="' . $product['quantity'] . '">';
                        echo '</td>';
                        echo '<td id="subtotal-' . $key . '">' . $price * $product['quantity'] . '€</td>';
                        echo '<td>';
                        echo '<button id="remove-product-' . $key . '" class="btn btn-danger btn-sm"><i class="fa fa-trash-o"></i></button>';
                        echo '</td>';
                        echo '</tr>';
                    }
                } else {
                    echo '<div class="row">';
                    echo '<div class="col"><h1 style="text-align: center">Shooping cart is empty</h1></div>';
                    echo '</div>';
                }
                ?>
			</tbody>
			<tfoot>
            <?php
            if (isset($_SESSION['products'])) {
				echo '<tr>';
					echo '<td colspan="2">';
                        echo '<a href="index.php" class="btn btn-warning"><i class="fa fa-angle-left"></i> Continue Shopping</a>';
                    echo '</td>';
					echo '<td colspan="4" class="hidden-xs"></td>';
					echo '<td colspan="2" class="hidden-xs text-center"><strong id="total-price">Total ' . $_SESSION['total'] . '€</strong></td>';
					echo '<td>';
					echo '<button type="button" class="btn btn-success btn-block" data-toggle="modal" data-target="#exampleModal">';
					echo 'Checkout <i class="fa fa-angle-right"></i>';
					echo '</button>';
					echo '</td>';
				echo '</tr>';
            }
            ?>
			</tfoot>
		</table>
	</div>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <form action="mailer/PHPMailer.php" method="POST">
                        <div class="form-group">
                            <label for="first-name">First name:</label>
                            <input type="text" class="form-control" placeholder="Enter first name" name="first-name" required>
                        </div>
                        <div class="form-group">
                            <label for="last-name">Last name:</label>
                            <input type="text" class="form-control" placeholder="Enter last name" name="last-name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email address:</label>
                            <input type="email" class="form-control" placeholder="Enter email" name="email">
                        </div>
                        <div class="form-group">
                            <label for="phone-number">Phone number:</label>
                            <input type="number" class="form-control" placeholder="Enter phone number" name="phone-number" required>
                        </div>
                        <input type="hidden" name="cart">
                        <button type="submit" class="btn btn-primary">Order</button>
                    </form>
                </div>
            </div>
        </div>
    </div>


	<!-- Optional JavaScript -->
	<!-- jQuery first, then Popper.js, then Bootstrap JS -->
	<script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

	<script type="text/javascript" src="js/custom.js"></script>
	<script type="text/javascript" src="js/gallery.js"></script>
	<script type="text/javascript" src="js/ajax.js"></script>
</body>
</html>
